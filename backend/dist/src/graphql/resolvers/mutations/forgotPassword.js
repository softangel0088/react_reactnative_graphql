"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPasswordSchema = void 0;
const apollo_server_1 = require("apollo-server");
const prismaContext_1 = require("../../prismaContext");
const generateRandomNumber_1 = require("../../../utils/generateRandomNumber");
exports.forgotPasswordSchema = (0, apollo_server_1.gql) `
  scalar JSON

  input forgotPasswordInput {
    email: String!
  }

  type forgotPasswordResponse {
    jwt: String!
    message: String!
    status: String!
  }

  type Mutation {
    forgotPassword(input: forgotPasswordInput): forgotPasswordResponse!
  }
`;
const forgotPassword = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = args.input;
    const resetCode = (0, generateRandomNumber_1.generateRandomNumber)();
    const updatedUser = yield prismaContext_1.prismaContext.prisma.user.update({
        where: {
            email,
        },
        data: {
            passwordResetCode: resetCode,
        },
    });
    return {
        message: 'Reset code was sent',
        status: 'success',
    };
});
exports.default = forgotPassword;
//# sourceMappingURL=forgotPassword.js.map