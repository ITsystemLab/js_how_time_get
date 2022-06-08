function myFunction() {

  /**
   * 時間を取得しよう!!
   */
  
  // 今の時間を取得
  var date = new Date()

  // 出力
  console.log("Time: " + date)
  console.log("TimeStamp: " + date.getTime())
  console.log("年: " + date.getFullYear())
  console.log("月(1月»0, 12月»11): " + date.getMonth())
  console.log("日: " + date.getDate())
  console.log("曜日(日»0, 土»6): " + date.getDay())
  console.log("時間: " + date.getHours())
  console.log("分: " + date.getMinutes())
  console.log("秒: " + date.getSeconds())
  console.log("ミリ秒: " + date.getMilliseconds())

  // 見やすい形にするために定義&調整する
  var year = date.getFullYear() // 年
  var month = date.getMonth() + 1 //月  月は１少なく表示されるので１を足す
  var day = date.getDate() // 日
  var hours = date.getHours() // 時間
  var minutes = date.getMinutes() // 分
  var seconds = date.getSeconds() // 秒
  var milliseconds = date.getMilliseconds() // ミリ秒

  // 曜日を定義
  var week = ["日","月","火","水","木","金","土"]
  var weekOfday = week[date.getDay()]

  // 出力
  console.log( year + "年" + month + "月" + day + "日（" + weekOfday + "）" + hours + "時" + minutes + "分" + seconds + "秒" + milliseconds )


  /**
   * 時間の引き算をしよう！！
   */

  // 2003年8月24日を定義()
  var birthday = new Date(2003, 8, 24, 0, 0, 0) // new Date(年 , 月 , 日 , 時 , 分 , 秒 , ミリ秒)

  // 現在時刻 - 2003年8月24日 (経過時間を求める)
  var difference = new Date(date - birthday)

  // 見やすい形にするために定義&調整する
  var d_year = difference.getFullYear() - 1970 // 年 0が1970年なので1970を引く
  var d_month = difference.getMonth() + 1//月 月は１少なく表示されるので１を足す
  var d_day = difference.getDate() // 日
  var d_hours = difference.getHours() // 時間
  var d_minutes = difference.getMinutes() // 分
  var d_seconds = difference.getSeconds() // 秒
  var d_milliseconds = difference.getMilliseconds() // ミリ秒

  // 出力
  console.log( d_year + "年" + d_month + "ヶ月" + d_day + "日 " + d_hours + "時" + d_minutes + "分" + d_seconds + "秒" + d_milliseconds )
}
