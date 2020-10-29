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
        if (target) {
            console.log("目標 :" + target);
            console.log("時間 :" + duration);
            console.log("位移 :" + offset);
        }
    });
});