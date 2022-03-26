import React from 'react';
import './Answers.css';

const Answers = () => {
    return (
        <div className='answer-container'>
            <div className='answer'>
                <h4>How Reactjs works?</h4>
                <p>Reactjs virtual DOM এর মাদ্ধমে কাজ করে । virtual DOM এ react তাঁর নিজের element তৈরি করে যাকে react element বলা হয়ে । যখনি react a state or props chenge হয়ে তখন , react reconciliation or diff alogorithm এর মাদ্ধমে react element এর আগের অবস্থা এবং পরের অবস্থা compare করে virtual   dom ঠিক যে  যায়গায়  chenge  হয়েছে  borwser DOM  সেই যায়গায় টায় chenge করে দেয় । </p>
            </div>
            <div className='answer'>
                <h4>Difference between Props and state</h4>
                <p>Props and state দুটোই component এর data . props component এর বাহির থেকে provide করা হয় এবং state component এর নিজস্ব data . </p>
                <p>
                Props component এর  ভেতরে change করা যায় না । কিন্তু   state user action অনুযায়ী change হতে পারে ।
                </p>
            </div>
            <div className='answer'>
                <h4>How useState Hooks works</h4>
                <p>useState() is react hooks . It is a simple vanilla javascript function . that provide an array . in array there two things one is state and others a function that change the state </p>
            </div>
        </div>
    );
};

export default Answers;