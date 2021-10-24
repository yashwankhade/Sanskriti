import { CourierClient } from "@trycourier/courier";

const courier = CourierClient({ authorizationToken: "dk_prod_6XTAWTETF648P3GBSFDWNBKKY17P" });

const { messageId } = await courier.send({
  brand: "TAT7MTYYRHM85PPJDGHMTRJWFBVM",
  eventId: "RG3YR0129K4A9ZNNN9KEBQN7W51C",
  recipientId: "d7b5c66a-7d69-4b02-9a14-cd12254f803a",
  profile: {
    email: "atharvamogade12@gmail.com",
  },
  data: {
    name: "Diwali",
    celebrated_when: "4 Nov 2021",
    region:"All over India",
    info:"Diwali is a festival of lights and one of the major festivals celebrated by Hindus, Jains, Sikhs and some Buddhists The festival usually lasts five days and is celebrated during the Hindu lunisolar month Kartika (between mid-October and mid-November) One of the most popular festivals of Hinduism, Diwali symbolizes the spiritual 'victory of light over darkness, good over evil, and knowledge over ignorance'The festival is widely associated with Lakshmi, goddess of prosperity, with many other regional traditions connecting the holiday to Sita and Rama, Vishnu, Krishna, Yama, Yami, Durga, Kali, Hanuman, Ganesha, Kubera, Dhanvantari, or Vishvakarman Furthermore, it is, in some regions, a celebration of the day Lord Rama returned to his kingdom Ayodhya with his wife Sita and his brother Lakshmana after defeating Ravana in Lanka and serving 14 years of exile"

  },
  override: {
  },
});
