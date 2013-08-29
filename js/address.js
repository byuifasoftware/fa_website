/**********************************
 * Address toggle images function
 *********************************/
$('#address').on({
    'click': function () {
        var origsrc = $(this).attr('src');
        var src = '';
        if (origsrc == 'Images/Admin_Offices/Financial%20Aid/contact_page/address/address.png') src ='Images/Admin_Offices/Financial%20Aid/contact_page/address/hide_address.png';
        if (origsrc == 'Images/Admin_Offices/Financial%20Aid/contact_page/address/hide_address.png') src = 'Images/Admin_Offices/Financial%20Aid/contact_page/address/address.png';
        $(this).attr('src', src);
    }
});