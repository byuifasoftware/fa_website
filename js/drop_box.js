/********************************
 * 
 *******************************/
$('#drop_box').on({
    'click': function () {
        var origsrc = $(this).attr('src');
        var src = '';
        if (origsrc == 'Images/Admin_Offices/Financial%20Aid/contact_page/drop_box/drop_box.png') src ='Images/Admin_Offices/Financial%20Aid/contact_page/drop_box/hide_drop_box.png';
        if (origsrc == 'Images/Admin_Offices/Financial%20Aid/contact_page/drop_box/hide_drop_box.png') src = 'Images/Admin_Offices/Financial%20Aid/contact_page/drop_box/drop_box.png';
        $(this).attr('src', src);
    }
});