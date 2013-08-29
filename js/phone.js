/**
 * @author famedia
 */
$('#phone').on({
    'click': function () {
        var origsrc = $(this).attr('src');
        var src = '';
        if (origsrc == 'Images/Admin_Offices/Financial%20Aid/contact_page/phone/phone.png') src ='Images/Admin_Offices/Financial%20Aid/contact_page/phone/hide_phone.png';
        if (origsrc == 'Images/Admin_Offices/Financial%20Aid/contact_page/phone/hide_phone.png') src = 'Images/Admin_Offices/Financial%20Aid/contact_page/phone/phone.png';
        $(this).attr('src', src);
    }
});