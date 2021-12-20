import { usdFormat } from "./usdFormat";

it('formats received string to $ddd,ddd.dd format', () => {
  const output = usdFormat('119150835874.4699281625807300');
  expect(output).toMatch(/^\$(0|[1-9][0-9]{0,2})(,\d{3})*(\.\d{2})$/);  // $119,150,835,874.47
})