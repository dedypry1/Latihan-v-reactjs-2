import React, { Component, Fragment } from 'react';
import '../Blogs/Blog.css';
import BlogsComponent from '../../component/BlogsComponent/BlogsComponent';
import axios from 'axios';

class Blog extends Component {
state = {
    post : [],
    formBlogPost: {
        id : 1,
        title: '',
        body: '',
        userId: 1,
    },
    isUpdate: false
}

    getPostApi= () => {
        axios.get(' http://localhost:3004/posts')
        .then((result)=> {
            this.setState({
                post : result.data
            })
        })
    }
// metod menyimpan data
    postDataToApi = () => {
        axios.post (' http://localhost:3004/posts', this.state.formBlogPost).then((res) => {
            console.log (res);

            // menghilangkan reload
            this.getPostApi();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id : 1,
                    title: '',
                    body: '',
                    userId: 1,
                },
            })
        }, (err) => {
            console.log('error :', err);
        })
    }

    putDataToApi = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then(res =>{
            console.log(res);
            this.getPostApi();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id : 1,
                    title: '',
                    body: '',
                    userId: 1,
                },
            })
        })
    }
    handleRemove = (data) =>{
        // console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`).then((res)=>{
            // console.log(res);
            this.getPostApi()
        })
    }

    // untuk update
    handleUpdate =(data) => {
        console.log(data);
        this.setState ({
            formBlogPost: data,
            isUpdate: true
        })
    }

    handleFormInput = (event)=> {
        // console.log('data input', event.target)
        // let title = event.target.value
        let formBlogPostData= {...this.state.formBlogPost};
        let timenow = new Date ().getTime ();
        // console.log(timenow);
       
        
        if(!this.state.isUpdate){
            formBlogPostData['id'] = timenow;
        }

        formBlogPostData [event.target.name]= event.target.value;
        this.setState({
            formBlogPost: formBlogPostData
        // },()=>{
        //     console.log('value title', this.state.formBlogPost);
        })
        
    }

    handleSubmit = ()=> {
        if (this.state.isUpdate){
            this.putDataToApi ()
        }else{
            this.postDataToApi();
        }
        // console.log(this.state.formBlogPost);
        
    }
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => console.log(json))
        // axios.get(' http://localhost:3004/posts')
        // .then((result)=> {
        //     this.setState({
        //         post : result.data
        //     })
        // })
        this.getPostApi();
    }
    render() {
        return (
            <Fragment>
                <h2>Selamat datang di babastudio</h2>
                <div className="content">
                    <div className="formdata">
                        <label htmlFor="title" className="judul">title blog</label>
                        <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" className="title" onChange={this.handleFormInput} />
                        
                        <label htmlFor="body-content" className="judul"  >Blog Content</label>
                        <textarea name="body" value={this.state.formBlogPost.body} id="body" cols="40" rows="15" placeholder ="add blog content" className="title" onChange={this.handleFormInput}></textarea>
                        <button className="btn-submit" onClick={this.handleSubmit} >Simpan Data</button>
                    </div>

                   {/* <BlogsComponent title="title" desc="desc"/> */}
                   {
                       this.state.post.map (post=> {
                           return <BlogsComponent key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate}/>
                       })
                   }
                </div>
            </Fragment>
        );
    }
}

export default Blog;