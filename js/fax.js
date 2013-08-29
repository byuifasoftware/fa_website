/**
 * @author famedia
 */
$('#fax').on({
    'click': function () {
        var origsrc = $(this).attr('src');
        var src = '';
        if (origsrc == 'Images/Admin_Offices/Financial%20Aid/contact_page/fax/fax.png') src ='Images/Admin_Offices/Financial%20Aid/contact_page/fax/hide_fax.png';
        if (origsrc == 'Images/Admin_Offices/Financial%20Aid/contact_page/fax/hide_fax.png') src = 'Images/Admin_Offices/Financial%20Aid/contact_page/fax/fax.png';
        $(this).attr('src', src);
    }
});