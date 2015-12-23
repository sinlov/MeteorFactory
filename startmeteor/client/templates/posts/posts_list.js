/**
 * Created by "sinlov" on 15/12/23.
 */

var postsData = [
    {
        title: 'Sogou Search',
        url: 'https://www.sogou.com/'
    },
    {
        title: 'Meteor',
        url: 'http://meteor.com'
    },
    {
        title: 'Discover Meteor 中文',
        url: 'http://zh.discovermeteor.com/'
    }
];

Template.postsList.helpers({
    posts: postsData
});