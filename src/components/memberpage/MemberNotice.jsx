import React from 'react'
import { Link } from 'react-router-dom'
import orderupdate from '../../images/orderupdate.svg'
import newmembernotice from '../../images/newmembernotice.svg'

export default function MemberNotice() {
  return (
    <>
      <div className="noticecontainer yz_table">
        <h4>通知總覽</h4>
        <hr />
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">商品名稱</th>
              <th scope="col">價格</th>
              <th scope="col">數量</th>
              <th scope="col">狀態</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="yz_img" scope="row">
                <img src={orderupdate} />
              </th>
              <td>蜜韻紅茶立體茶包</td>
              <td>＄＄＄</td>
              <td>100個</td>
              <td>已取消</td>
            </tr>
            <tr>
              <th className="yz_img" scope="row">
                <img src={orderupdate} />
              </th>
              <td>蜜韻紅茶</td>
              <td>＄＄＄</td>
              <td>100個</td>
              <td>已完成</td>
            </tr>
            <tr>
              <th className="yz_img" scope="row">
                <img src={orderupdate} />
              </th>
              <td>苗栗貓裏紅茶</td>
              <td>＄＄＄</td>
              <td>100個</td>
              <td>已完成</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
