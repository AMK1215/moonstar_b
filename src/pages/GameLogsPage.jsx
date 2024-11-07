import React, { useContext, useEffect, useState } from 'react'
import '../assets/css/wallet.css'
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseUrl';

const GameLogsPage = () => {
  const { user } = useContext(AuthContext);
  const [selectedTab, setSelectedTab] = useState("today");
  const tabs = [
    { name: 'Today', value: "today" },
    { name: 'Yesterday', value: "yesterday" },
    { name: 'This Week', value: "this_week" },
    { name: 'Last Week', value: "last_week" },
  ];

  const [url, setUrl] = useState(BASE_URL + "/wager-logs?type=" + selectedTab);
  const { data: logs, loading } = useFetch(url);
  console.log(logs);

  useEffect(() => {
    setUrl(BASE_URL + "/wager-logs?type=" + selectedTab);
  }, [selectedTab]);


  return (
    <div className=''>
      <div className="gradientBg text-center pt-4 pb-5">
        <small className="d-block b-2">Wallet Balance</small>
        <h2 className="fw-semibold">K {user?.balance}</h2>

      </div>
      <div className="profileBg rounded-5 p-3">
        <p className="d-block text-white mb-3">Game Logs</p>
        <div className="d-flex align-items-center flex-wrap gap-1 text-white mb-3">
          {tabs.map((tab, index) => {
            return <div key={index} onClick={() => setSelectedTab(tab.value)} className={`  py-2 px-2 ${selectedTab == tab.value ? 'activeBg' : ''}`}>
              <p className="px-1 px-sm-2 filterTime">{tab.name}</p>
            </div>
          })}

        </div>
        <div className="tableContainer">
          <Table className='mb-5' striped bordered hover>
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>Game</th>
                <th>Bet</th>
                <th>Count</th>
                <th>Transaction</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={6}>Loading...</td>
                </tr>
                ) : logs && logs.map((log, index) => (
                <tr key={index}>
                  <td>{log.from_date}</td>
                  <td>{log.to_date}</td>
                  <td>{log.product}</td>
                  <td>{log.total_bet_amount}</td>
                  <td>{log.total_count}</td>
                  <td>{log.total_transaction_amount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default GameLogsPage
