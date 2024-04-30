import classNames from 'classnames/bind'

import styles from './App.module.scss'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // wedding 데이터 호출
  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8888/wedding33')
      .then((response) => {
        if (!response.ok) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }
        return response.json()
      })
      .then((data) => {
        setWedding(data)
        setLoading(false)
      })
      .catch((e) => {
        console.log('에러발생', e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error...</div>
  }

  return <div className={cx('container')}>{JSON.stringify(wedding)}</div>
}

export default App
