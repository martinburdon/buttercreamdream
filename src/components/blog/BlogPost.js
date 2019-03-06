import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class BlogPost extends Component {
  constructor(props) {
    super(props);

    const postSlug = props.match.params.id;

    this.state = {
      postSlug,
      markdown: 'Loading...'
    };
  }

  // TODO Change to static getDerivedStateFromProps
  componentWillMount() {
    const post = require(`../posts/${this.state.postSlug}.md`);

    fetch(post)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: text
        })
      })
      .catch(err => {
        console.log(':: err ', err);
      });
  }

  render() {
    console.log(this.state.markdown);
    return (
      <div>
        <ReactMarkdown source={this.state.markdown} />
      </div>
    );
  }
}

export default BlogPost;

// TODO: Get list of posts so doesn't fail when hittin incorrect url
// orrr... store MDs somewhere else like Github gist, handle in the catch
// MD file has the url slug set as the filename, i.e. "/my-new-post", "my-new-post.md"
// React fetches the page that matches the slug
// If it doesn't find a match it shows a 404
