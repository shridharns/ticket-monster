define([
    'backbone',
    'utilities',
    'text!../../../../templates/mobile/booking-details.html'],
    function (Backbone, utilities, bookingDetailsTemplate) {

    return Backbone.View.extend({
        render:function () {
            utilities.applyTemplate($(this.el), bookingDetailsTemplate, this.model.attributes);
            $(this.el).trigger('pagecreate');
            return this;
        }
    });
});