import Table from '@components/Table'
import React from 'react'
import './App.css'

function makeTableData(w: number, h: number) {
  return new Array(h).fill(0).map((_, row) => {
    return new Array(w).fill(0).map((_, col) => row * 10 + col)
  })
}

export default function App() {
  return <Table data={makeTableData(1, 9)} rowHeight={80} visibleRows={4} />
}
