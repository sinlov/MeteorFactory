/**
 * Created by "sinlov" on 15/12/23.
 */

Template.postItem.helpers({
    domain: function () {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});