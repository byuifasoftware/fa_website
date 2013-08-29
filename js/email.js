/********************************
 * 
 *******************************/
$('#email').on({
    'click': function () {
        var origsrc = $(this).attr('src');
        var src = '';
        if (origsrc == 'Images/Admin_Offices/Financial%20Aid/contact_page/email/email.png') src ='Images/Admin_Offices/Financial%20Aid/contact_page/email/hide_email.png';
        if (origsrc == 'Images/Admin_Offices/Financial%20Aid/contact_page/email/hide_email.png') src = 'Images/Admin_Offices/Financial%20Aid/contact_page/email/email.png';
        $(this).attr('src', src);
    }
});