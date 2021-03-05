import React from 'react';

class Home extends React.Component{
    render(){
        return (
            <main className="home">
                <img src='/img/portrait_av.jpg' className="selfie" alt="Andrew Veri"/>
                <section className="aboutMe">
                    <h2 id="title">About Me</h2>
                    <br></br>
                    <p>
                        I'm Andrew, a Graphic Designer, Layout Artist, Animator, Gamer and aspiring Web Developer. Problem solving and tinkering are quirks of mine.  I enjoy playing with tasks and finding the most efficient way of doing things. With a background in the arts, creativity comes naturallty to me and years of experience in print media production helps me derive automation solutions for both menial and complex tasks.
                    </p>
                </section>
            </main>
        )
    }
}

export default Home;