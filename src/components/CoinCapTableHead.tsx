import {
  TableHead,
  TableRow,
  TableCell,
} from '@material-ui/core'

import { CoinCapResponse } from '../interfaces/coinCap'

type HeadCell = {
  id: keyof CoinCapResponse
  label: string
}

const headCells: readonly HeadCell[] = [
  {
    id: 'rank',
    label: 'Rank',
  },
  {
    id: 'name',
    label: 'Name',
  },
  {
    id: 'priceUsd',
    label: 'Price (USD)',
  },
  {
    id: 'changePercent24Hr',
    label: '24H %',
  },
  {
    id: 'volumeUsd24Hr',
    label: '24H Trading Volume',
  },
  {
    id: 'marketCapUsd',
    label: 'Market Cap',
  },
]

const CoinCapTableHead = (): JSX.Element => {
  return (
    <TableHead>
      <TableRow>
        {/* {headCells.map((headCell) => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
        ))} */}
        <TableCell align="center">Rank</TableCell>
        <TableCell align="left">Name</TableCell>
        <TableCell align="right">Price (USD)</TableCell>
        <TableCell align="right">24H %</TableCell>
        <TableCell align="right">24H Trading Volume</TableCell>
        <TableCell align="right">Market Cap</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default CoinCapTableHead