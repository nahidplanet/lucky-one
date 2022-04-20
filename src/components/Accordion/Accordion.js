import React from 'react';

const Accordion = () => {
    return (
      <div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               How React Work?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>react কাজ করার জন্য  আমাদের ২টা নোট প্যাকেজ দরকার...<br/>
                <strong> ১। React</strong><br/>
                <strong> ২। React-Dom</strong><br/>
                  একটা কম্পোনেন্ট যখন লেখা হয় তখন তা পিউর js কোড থাকে। সো যতগুলো কম্পোনেন্ট লিখা হয় সেগুলো ফাংশন বা ক্লাসে লেখা হয়। যা পিউর js.। js এর মধ্যে jsx লিখা হয় যেটা দেখতে হুবহু html tag এর মত,কিন্তু প্রকৃতপক্ষে তা js এর এক  ভার্সন । Jsx code টাকে html এ convert করার প্রয়োজন পড়ে কারণ ব্রাউজার html কেই কেবল দেখায়।সো js কোডকে html এ  কনভার্ট করতে react নামের একটা প্যাকেজের প্রয়োজন পড়ে। babel নামক একটি কম্পাইলার মুলত এ কাজটি করে থাকে।এবার এই html কোড টাকে ব্রাউজারে দেখানোর পালা। এখন একটা html (index.html) filefileএর মধ্যে html কোড কে ইনজেক্ট করতে হবে।এটা করার জন্য যে প্যাকেজটা ইউজ হয় সেটা হলো React DOM। অর্থাৎ React DOM হলো jsx থেকে কম্পাইলার হওয়া কোডকে main Html কোডে injecte করে।আর এই পুরো প্রসেস টা চলে কোনো রকম পেজ লোড না করে। তাই এত ফাস্টলি কাজ করতে পারে React।</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                State Vs Props In React
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              ১. React এ কম্পোনেন্ট গুলোতে ডাটা পাঠাতে props ব্যবহার করা হয় এবং কোনোকিছুর ভিত্তিতে কোনোকিছুর মান পরিবর্তনে state ব্যবহার করা হয়। <br/>
              ২. props. Immutable অর্থ্যাৎ read Only, কম্পোনেন্টে ভিতর props এর  value change করা যাই না। তবে state Mutableএর মান চেঞ্জ করা যায়।<br/>

              ৩. props একটি কম্পোনেন্ট থেকে একাধিক কম্পোনেন্টে ডাটা পাস করতে পারে। তবে state কেবল ঐ একটি কম্পোনেন্ট কে নির্ভর করে পরিবর্তন হতে পারে।<br/>

              4. State এবং component এ props pass করা যায়।এবং state কেবল class এবং functional কম্পোনেন্টে ব্যবহার করা যায়
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Accordion;