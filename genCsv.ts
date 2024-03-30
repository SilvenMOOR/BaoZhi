import { createCsvHelper } from "./utils/createCsvHelper";

const main = async () => {
  try {
    let xi = 0;
    let koIndex = xi;
    const mainList = [];
    const records: { meaning: string, hanzi: string }[] = mainList.slice(50 * (xi - 1), 50 * xi);

    const totalItems = records.length;
    console.log("@total records:", totalItems);
    const csvList: any[] = records.map(elm => ({ yisi: elm.meaning, hanzi: elm.hanzi }));

    const rootFol = `docs`;
    const fileName = `2024-03-30-Index-${addLeadingZero(koIndex)}`;
    const fileResp = await createCsvHelper({ dataList: csvList, rootFol: rootFol, fileName: fileName });

    console.log(",fileResp", fileResp);
  } catch (error: any) {
    console.error(error);
  }
  console.log(">completed");
}



/* --------------------------- helper function(s) --------------------------- */
const addLeadingZero = (number: number) => String(number).padStart(2, '0');
const randomizeList = (list: any[]) => list.sort(() => (Math.random() > .5) ? 1 : -1);
/* -------------------------------------------------------------------------- */

main();