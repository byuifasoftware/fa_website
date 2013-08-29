/**
 * @author famedia
 */
$('#hours').on({
    'click': function () {
        var origsrc = $(this).attr('src');
        var src = '';
        if (origsrc == 'Images/Admin_Offices/Financial%20Aid/contact_page/hours/hours.png') src ='Images/Admin_Offices/Financial%20Aid/contact_page/hours/hide_hours.png';
        if (origsrc == 'Images/Admin_Offices/Financial%20Aid/contact_page/hours/hide_hours.png') src = 'Images/Admin_Offices/Financial%20Aid/contact_page/hours/hours.png';
        $(this).attr('src', src);
    }
});









