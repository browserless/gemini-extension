import { faker } from "https://esm.sh/@faker-js/faker";

export default async function () {
  const Internet = faker.internet;
  const rndData = [...Array(5)].map(() => ({
    domain: Internet.domainName(),
    ip: Internet.ip(),
    mac: Internet.mac(),
    protocol: Internet.protocol(),
  }));

  return {
    data: { domains: rndData },
    type: "application/json",
  };
}
