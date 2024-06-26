import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Login() {
  // State to manage language (default is English 'en')
  const [language, setLanguage] = useState('en');

  // Function to toggle between English and Japanese
  const toggleLanguage = () => {
    setLanguage(lang => (lang === 'en' ? 'jp' : 'en'));
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      <section className="bg-gray-50 flex-grow">
        <div className="w-full flex justify-end p-4">
          {/* Language toggle button added here, styled to match the existing design */}
          <button onClick={toggleLanguage} className="p-2 bg-gray-200 text-xs uppercase font-bold rounded-full">
            {language === 'en' ? '日本語' : 'English'}
          </button>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-blue p-2">
                {language === 'en' ? 'Welcome!\n Enter Email ID and Password' : 'ようこそ！\n メールアドレスとパスワードを入力してください'}
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-2">{language === 'en' ? 'Email' : 'メ－ル'}</span>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email ID" required="" />
                </div>
                <div>
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-2">{language === 'en' ? 'Password' : 'パスワード'}</span>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">{language === 'en' ? 'Forgot password?' : 'パスワードをお忘れですか？'}</Link>
                </div>
                <button className="border rounded border-2 border-black bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">{language === 'en' ? 'Login' : 'ログイン'}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Login;
