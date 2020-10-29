// 遍尋所有元素
$("*").each(function (index, element) {
    // 此元素被點選後執行
    $(this).click(function (e) {
        // 取得被點選元素的屬性 data-gt-
        var target = $(this).attr("data-gt-target");
        var duration = $(this).attr("data-gt-duration");
        var offset = $(this).attr("data-gt-offset");

        // JS 語法 : 判斷式
        //  if (條件) {程式區塊}
        // 當條件成立，會執行程式區塊

        // 如果 目標有資料 才會執行 { } 內的程式
        // 避免出現 undefine (未定義 -不存在的資料)
        // 可在網頁的"檢查-console"檢查
        if (target) {
            console.log("目標 :" + target);
            console.log("時間 :" + duration);
            console.log("位移 :" + offset);

            // 上方位置 = 目標區塊.位移().上方的位置
            $(target).offset().top;
            console.log("要前往元素的上方位置:" + top)
        }
    });
});