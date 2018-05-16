import React, { Component } from 'react';
import marked from 'marked';

class BlogPost extends Component {
  constructor(props) {
    super(props);

    const postSlug = props.match.params.id;

    this.state = {
      postSlug,
      markdown: 'Loading...'
    };
  }

  componentWillMount() {
    const post = require(`../posts/${this.state.postSlug}.md`);
    fetch(post)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          markdown: marked(text)
        })
      });
  }

  render() {
    return (
      <div>
        {this.state.markdown}
      </div>
    );
  }
}

export default BlogPost;

// MD file has the url slug set as the filename, i.e. "/my-new-post", "my-new-post.md"
// React fetches the page that matches the slug
// If it doesn't find a match it shows a 404
