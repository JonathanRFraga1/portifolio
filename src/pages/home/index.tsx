import React from 'react';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import style from './home.module.scss';

export default function Home() {
    return (
        <>
            <Nav/>
            <div className={`basic`}>
                <main>
                    <h1>Home</h1>
                </main>
                <Footer/>
            </div>
        </>
    );
}