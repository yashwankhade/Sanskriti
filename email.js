import { CourierClient } from "@trycourier/courier";

const courier = CourierClient({ authorizationToken: "dk_prod_6XTAWTETF648P3GBSFDWNBKKY17P" });

const { messageId } = await courier.send({
  brand: "TAT7MTYYRHM85PPJDGHMTRJWFBVM",
  eventId: "RG3YR0129K4A9ZNNN9KEBQN7W51C",
  recipientId: "d7b5c66a-7d69-4b02-9a14-cd12254f803a",
  profile: {
    email: "yashpat181001@gmail.com",
  },
  data: {
    name: "Diwali",
    celebrated_when: "4 Nov",
  },
  override: {
  },
});
