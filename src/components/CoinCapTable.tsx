import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,

} from '@material-ui/core'

import { CoinCapResponse } from '../interfaces/coinCap'
import CoinCapTableHead from './CoinCapTableHead'

type Props = {
  coinCapData: CoinCapResponse[]
}

const CoinCapTable = ({ coinCapData }: Props): JSX.Element => {
  return (
    <Box sx={{ width: '100%' }}>
      <Paper>
        <TableContainer>
          <Table size={'medium'}>
            <CoinCapTableHead />
            <TableBody>
              {coinCapData.map((data: CoinCapResponse) => {
                return (
                  <TableRow>
                    <TableCell align="center">{data.rank}</TableCell>
                    <TableCell align="left">{data.name} ({data.symbol})</TableCell>
                    <TableCell align="right">{data.priceUsd}</TableCell>
                    <TableCell align="right" style={data.changePercent24Hr.includes('-') ? {color: '#FF0000'} : {color: '#50C878'}}>
                      {data.changePercent24Hr  /* red if negative, green if positive */}
                    </TableCell>
                    <TableCell align="right">{data.volumeUsd24Hr}</TableCell>
                    <TableCell align="right">{data.marketCapUsd}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}

export default CoinCapTable