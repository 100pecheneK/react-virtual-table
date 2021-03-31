import React, { useEffect, useRef, useState } from 'react'
import './Table.css'

type TableTypeProps = {
  data: number[][]
  rowHeight: number
  visibleRows: number
}
export default function Table({
  data,
  rowHeight,
  visibleRows,
}: TableTypeProps) {
  const [start, setStart] = useState(0)
  function getTopHeight() {
    return rowHeight * start
  }
  function getBottomHeight() {
    return rowHeight * (data.length - (start + visibleRows))
  }

  function onScroll(e: React.UIEvent<HTMLDivElement, UIEvent>) {
    // @ts-ignore
    setStart(Math.floor(e.target.scrollTop / rowHeight))
  }
  return (
    <div
      style={{ height: rowHeight * visibleRows + 1, overflow: 'auto' }}
      onScroll={onScroll}
    >
      <div style={{ height: getTopHeight() }} />
      <table>
        <tbody>
          {data.slice(start, start + visibleRows).map((row, rowIndex) => (
            <tr style={{ height: rowHeight }} key={start + rowIndex}>
              {row.map((text, colText) => (
                <td key={`${start + rowIndex}${colText}`}>{text}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ height: getBottomHeight() }} />
    </div>
  )
}
