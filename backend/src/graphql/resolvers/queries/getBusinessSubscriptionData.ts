/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import {gql} from 'apollo-server';

import {stripe} from '../../../utils/stripe';

export const getBusinessSubscriptionDataSchema = gql`
  scalar JSON

  type getUserSubscriptionDataResponse {
    message: String!
    status: String!
    stripeCustomer: JSON
    activeSubscription: JSON
    remainingCredits: Int
    isInTrial: Boolean!
    redirectToPricingPage: Boolean!
    redirectToOTPPage: Boolean!
    isCustomPlan: Boolean!
    userInternalID: String!
    userEmail: String!
  }

  type Query {
    getBusinessSubscriptionData: getUserSubscriptionDataResponse!
  }
`;

/* jscpd:ignore-start */
const getBusinessSubscriptionData = async (
  parent: any,
  args: any,
  context: any,
) => {
  const {user} = context;

  console.log('user:', user);

  const stripeCustomer: any = await stripe.customers.retrieve(
    user.stripeCustomerID,
    {
      expand: ['subscriptions', 'cash_balance'],
    },
  );

  const activeSubscription = stripeCustomer?.subscriptions?.data
    ?.map((subscription: any) => {
      return {
        ...subscription,
        cycleStartAt: new Date(subscription.current_period_start * 1000),
        cycleEndAt: new Date(subscription.current_period_end * 1000),
        isActive: subscription.status === 'active',
      };
    })
    .filter((subscription: any) => subscription.isActive)?.[0];

  let isInTrial = true;

  if (activeSubscription) {
    isInTrial = false;
  }

  const {firstLeadReceivedAt} = user;

  if (firstLeadReceivedAt) {
    const currentDate = new Date();
    const msBetweenDates = Math.abs(
      firstLeadReceivedAt.getTime() - currentDate.getTime(),
    );
    const daysBetweenDates = msBetweenDates / (24 * 60 * 60 * 1000);

    if (daysBetweenDates > 30) {
      isInTrial = false;
    }
  }

  const redirectToPricingPage = !isInTrial && !activeSubscription;

  const data: any = {
    isInTrial,
    redirectToPricingPage,
    redirectToOTPPage: user.emailIsVerified !== true,
    stripeCustomer,
    activeSubscription,
  };

  data.isCustomPlan = false;
  data.userInternalID = user.id;
  data.userEmail = user.email;

  return {
    ...data,
    message: 'Subscription data retrieved.',
    status: 'success',
  };
};
/* jscpd:ignore-end */

export default getBusinessSubscriptionData;
