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
exports.getUserSchema = void 0;
const apollo_server_1 = require("apollo-server");
const prismaContext_1 = require("../../prismaContext");
exports.getUserSchema = (0, apollo_server_1.gql) `
  scalar JSON

  input getUserInput {
    id: String!
  }

  type getUserResponse {
    message: String!
    status: String!
    data: JSON
  }

  type Query {
    getUser(input: getUserInput): getUserResponse!
  }
`;
const getUser = (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = args;
    const foundUser = yield prismaContext_1.prismaContext.prisma.user.findFirst({
        where: {
            id,
        },
    });
    if (!foundUser) {
        return {
            message: 'User not found',
            status: 'failed',
            data: null,
        };
    }
    const user = Object.assign({}, foundUser);
    delete user.password;
    return {
        message: 'User found',
        status: 'success',
        data: user,
    };
});
exports.default = getUser;
//# sourceMappingURL=getUser.js.map