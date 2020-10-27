// 遍尋所有元素
$("*").each(function (index, element) {
    // 此元素被點選後執行
    $(this).click(function (e) {
        // 取得被點選元素的屬性 data-gt-
        var target = $(this).attr("data-gt-target");
        var duration = $(this).attr("data-gt-duration");
        var offset = $(this).attr("data-gt-offset");
        console.log("目標 :" + target);
        console.log("時間 :" + duration);
        console.log("位移 :" + offset);
    });
});