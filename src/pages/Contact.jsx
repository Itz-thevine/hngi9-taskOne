import React from 'react'
import '../App.css';
import I4GLogo from '../assets/I4G-Logo.webp'

const Contact = () => {
    const name = 'Mmaduabuchi Divine Ikechukwu'
  return (
    <div>
        <div className='relative pt-16 px-4'>
            <div className='flex flex-col items-center '>   

                <div className='lg:w-4/6 w-full'>
                    <p className=' text-3xl font-bold lg:text-[30px]' id='twitter'>Contact me</p>
                    <p className='pt-4'>Hi there, contact me to ask me about anything you have in mind.</p>

                    <form action="" className='w-full pt-12'>
                        <div className='flex flex-wrap'>
                            <label for='first_name' className='mb-6 w-full lg:w-[48%] lg:mr-[4%]'>First name:
                                <input type="text" id='first_name' className='w-full  h-[44px] px-3.5 py-2.5 my-2.5 rounded-md border-slate-300 border-2' placeholder='Enter your first name'/>
                            </label>
                            <label for='last_name' className='mb-6 w-full lg:w-[48%]'>Last name:
                                <input type="text" id='last_name' className='w-full  h-[44px] px-3.5 py-2.5 my-2.5 rounded-md border-slate-300 border-2' placeholder='Enter your last name'/>
                            </label>
                        </div>
                        <label for='email'>Email:
                            <input type="email" id='email' className=' w-full h-[44px] px-3.5 py-2.5 my-2.5 mb-12 rounded-md border-slate-300 border-2' placeholder='yourname@email.com'/>
                        </label>
                        <label for="message">Your message
                            <textarea id="message" rows="4" class="resize-noneblock px-3.5 py-2.5 mt-2.5 mb-12 w-full rounded-md border-slate-300 border-2" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                        </label>
                        <div class="flex items-start mb-12">
                            <label for="checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex">
                                <input id="checkbox" type="checkbox" value="" class="w-4 h-4 pr-5 text-blue-600"/>
                                <p className='ml-5'>You agree to providing your data to {name} who may contact you.</p>
                            </label>
                        </div>

                        <input type="submit" id='btn_submit' className='w-full bg-blue-600 text-white py-3 rounded-md' value='Send message' />

                    </form>
            
                </div>

              

                <div className='w-full h-14'></div>

                <div className='py-6 w-full'>
                <hr className='w-full'/>
                <div className='w-full lg:flex lg:items-center lg:justify-between'>
                <div className='mt-4 '>
                    <svg width="139" height="19" viewBox="0 0 139 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.58728 12.3696V12.3017L10.2984 2.88469V0.751074H0.289858V3.25323H6.59374V3.32113L0.0183105 12.68V14.8621H10.3179V12.3696H3.58728ZM18.7942 5.16375V9.86742C18.7942 10.7694 18.5808 11.4676 18.1735 11.9526C17.7565 12.4472 17.2425 12.6897 16.6411 12.6897C16.0205 12.6897 15.5743 12.5151 15.3028 12.166C15.0312 11.8168 14.9052 11.1961 14.9052 10.3233V5.16375H12.306V11.0021C12.306 11.7295 12.3836 12.3502 12.5582 12.874C12.7328 13.3977 12.9752 13.8147 13.305 14.125C13.6347 14.4354 14.0032 14.6681 14.4299 14.8136C14.8469 14.9591 15.3319 15.0269 15.875 15.0269C16.4278 15.0269 16.9515 14.9202 17.4461 14.6875C17.9407 14.4547 18.3772 14.125 18.7554 13.6789H18.7942V14.8621H21.3933V5.16375H18.7942ZM29.5011 4.99889C28.9191 4.99889 28.3858 5.14438 27.8814 5.41591C27.3772 5.68753 26.9407 6.0851 26.5722 6.58943H26.5431V5.16375H23.9439V14.8621H26.5431V10.3621C26.5431 9.62502 26.7565 9.01401 27.1929 8.53881C27.6293 8.07329 28.2403 7.83081 29.0161 7.83081C29.2101 7.83081 29.4429 7.84049 29.7048 7.85994V5.00866C29.666 5.00866 29.5981 4.99889 29.5011 4.99889ZM32.8082 3.79633C33.2446 3.79633 33.6228 3.64115 33.9429 3.33081C34.2533 3.02047 34.4181 2.65193 34.4181 2.20581C34.4181 1.77909 34.2533 1.40086 33.9429 1.09052C33.6228 0.780172 33.2446 0.624999 32.8082 0.624999C32.3621 0.624999 31.9742 0.780172 31.6638 1.09052C31.3535 1.40086 31.1982 1.77909 31.1982 2.20581C31.1982 2.49676 31.2662 2.76832 31.4117 3.01077C31.5474 3.25323 31.7414 3.44717 31.9935 3.58298C32.2457 3.72846 32.5172 3.79633 32.8082 3.79633ZM31.5086 14.8621H34.1078V5.16375H31.5086V14.8621ZM47.6563 14.8621H50.4687V0.751074H47.6563V14.8621ZM59.1681 4.99889C58.5668 4.99889 57.9946 5.12502 57.4515 5.36742C56.9084 5.6099 56.4429 5.95906 56.0549 6.41489H56.0258V5.16375H53.4267V14.8621H56.0258V9.98386C56.0258 9.14005 56.2198 8.49031 56.6175 8.0248C57.0151 7.56896 57.5485 7.33616 58.2274 7.33616C58.8577 7.33616 59.3232 7.52046 59.6336 7.87931C59.9343 8.24783 60.0894 8.86852 60.0894 9.76074V14.8717H62.6885V9.111C62.6885 8.38364 62.6013 7.75326 62.4364 7.21012C62.2618 6.67674 62.0194 6.25004 61.6993 5.92993C61.3793 5.61958 61.0108 5.38686 60.5938 5.23169C60.1767 5.07652 59.7015 4.99889 59.1681 4.99889ZM68.1972 15.0269C68.7888 15.0269 69.2737 14.9784 69.6519 14.8717C70.0205 14.7748 70.3987 14.6196 70.7673 14.4159L70.0981 12.3405C69.6519 12.5733 69.2446 12.68 68.8761 12.68C68.5657 12.68 68.3524 12.583 68.2166 12.3793C68.0808 12.1853 68.0226 11.8653 68.0226 11.4386V7.3168H70.6605V5.16375H68.0226V1.71121L65.4235 1.99245V5.16375H64.2791V7.3168H65.4235V11.7974C65.4235 12.8642 65.6659 13.6692 66.1605 14.2122C66.6552 14.7554 67.334 15.0269 68.1972 15.0269ZM81.1444 9.92568C81.1444 8.98488 80.9407 8.14115 80.5528 7.39442C80.1552 6.64761 79.5927 6.06573 78.875 5.63903C78.1476 5.21224 77.3136 4.99889 76.3825 4.99889C75.7037 4.99889 75.0636 5.12502 74.472 5.36742C73.8707 5.61958 73.3664 5.95906 72.9397 6.39544C72.5129 6.83191 72.1832 7.36529 71.9407 7.98598C71.6885 8.60667 71.5722 9.28554 71.5722 10.0032C71.5722 10.9924 71.7855 11.875 72.222 12.6412C72.6584 13.417 73.2597 14.0087 74.0161 14.4159C74.7726 14.8232 75.6164 15.0269 76.5668 15.0269C77.4979 15.0269 78.3125 14.8621 79.0302 14.5324C79.7381 14.2026 80.3103 13.7565 80.7565 13.194L79.069 11.6228C78.458 12.3599 77.6821 12.7285 76.7511 12.7188C76.1304 12.7188 75.597 12.5442 75.1605 12.2145C74.7241 11.8847 74.4332 11.4386 74.278 10.8567H81.0765C81.1153 10.7015 81.1444 10.3912 81.1444 9.92568ZM76.4698 7.28775C77.0129 7.28775 77.4687 7.44292 77.8276 7.7435C78.1767 8.04416 78.4289 8.46118 78.5646 8.98488H74.2878C74.4332 8.44182 74.695 8.01511 75.083 7.72413C75.4709 7.43315 75.9267 7.28775 76.4698 7.28775ZM88.7766 4.99889C88.1948 4.99889 87.6618 5.14438 87.157 5.41591C86.653 5.68753 86.2168 6.0851 85.8477 6.58943H85.8187V5.16375H83.2201V14.8621H85.8187V10.3621C85.8187 9.62502 86.0323 9.01401 86.4684 8.53881C86.9054 8.07329 87.5161 7.83081 88.2924 7.83081C88.4861 7.83081 88.7186 7.84049 88.981 7.85994V5.00866C88.9421 5.00866 88.8742 4.99889 88.7766 4.99889ZM96.4094 4.99889C95.8085 4.99889 95.2359 5.12502 94.693 5.36742C94.1501 5.6099 93.6841 5.95906 93.296 6.41489H93.267V5.16375H90.6684V14.8621H93.267V9.98386C93.267 9.14005 93.4615 8.49031 93.8588 8.0248C94.2568 7.56896 94.7898 7.33616 95.4684 7.33616C96.099 7.33616 96.565 7.52046 96.8753 7.87931C97.1757 8.24783 97.3305 8.86852 97.3305 9.76074V14.8717H99.9299V9.111C99.9299 8.38364 99.843 7.75326 99.6775 7.21012C99.5029 6.67674 99.2604 6.25004 98.941 5.92993C98.6207 5.61958 98.2524 5.38686 97.8353 5.23169C97.4182 5.07652 96.9432 4.99889 96.4094 4.99889ZM105.555 15.0269C106.777 15.0269 107.708 14.7554 108.348 14.1929C108.988 13.6401 109.318 12.9127 109.318 12.0108C109.318 11.778 109.298 11.5549 109.259 11.361C109.134 10.7209 108.755 10.1972 108.135 9.80924C107.766 9.57652 107.049 9.26617 105.982 8.86852C105.467 8.67453 105.099 8.5 104.866 8.34482C104.634 8.18965 104.527 8.01511 104.527 7.82113C104.527 7.58833 104.624 7.41379 104.818 7.28775C105.012 7.16162 105.225 7.09376 105.477 7.09376C105.846 7.09376 106.234 7.18107 106.641 7.35561C107.049 7.53015 107.427 7.78231 107.795 8.12179L109.056 6.22091C108.503 5.7942 107.941 5.48386 107.378 5.28987C106.806 5.09589 106.186 4.99889 105.506 4.99889C104.847 4.99889 104.246 5.12502 103.722 5.35773C103.198 5.60022 102.781 5.93969 102.471 6.38576C102.16 6.83191 102.015 7.33616 102.015 7.90844C102.015 8.21878 102.044 8.5 102.121 8.75216C102.19 9.01401 102.296 9.24673 102.432 9.44071C102.568 9.64438 102.723 9.82868 102.898 9.98386C103.072 10.1487 103.276 10.2942 103.518 10.4299C103.751 10.5657 103.983 10.6724 104.217 10.7694C104.449 10.8664 104.711 10.9634 105.002 11.0603C105.458 11.2156 105.798 11.3319 106.03 11.4289C106.263 11.5259 106.437 11.6326 106.573 11.7489C106.7 11.8653 106.767 11.9913 106.767 12.1368C106.767 12.3793 106.661 12.5733 106.447 12.7188C106.234 12.874 105.943 12.9418 105.574 12.9418C104.585 12.9418 103.693 12.5636 102.888 11.8071L101.627 13.6013C102.704 14.5517 104.013 15.0269 105.555 15.0269ZM117.116 4.99889C116.485 4.99889 115.903 5.11533 115.36 5.33837C114.817 5.57108 114.351 5.90088 113.963 6.33726H113.924V0.237061H111.326V14.8621H113.924V9.94504C113.924 9.09155 114.119 8.4515 114.526 8.00535C114.923 7.55928 115.476 7.33616 116.194 7.33616C116.834 7.33616 117.309 7.52046 117.62 7.86962C117.93 8.22846 118.086 8.83947 118.086 9.69288V14.8717H120.694V9.03337C120.694 8.31569 120.606 7.68532 120.432 7.16162C120.258 6.63793 120.006 6.21122 119.685 5.90088C119.356 5.59053 118.987 5.36742 118.561 5.22201C118.134 5.07652 117.658 4.99889 117.116 4.99889ZM124.593 3.79633C125.029 3.79633 125.407 3.64115 125.727 3.33081C126.038 3.02047 126.202 2.65193 126.202 2.20581C126.202 1.77909 126.038 1.40086 125.727 1.09052C125.407 0.780172 125.029 0.624999 124.593 0.624999C124.147 0.624999 123.759 0.780172 123.448 1.09052C123.138 1.40086 122.982 1.77909 122.982 2.20581C122.982 2.49676 123.051 2.76832 123.196 3.01077C123.332 3.25323 123.526 3.44717 123.778 3.58298C124.03 3.72846 124.302 3.79633 124.593 3.79633ZM123.294 14.8621H125.892V5.16375H123.294V14.8621ZM134.223 4.99889C132.982 4.99889 132.002 5.42568 131.285 6.27908H131.246V5.16375H128.646V18.7899H131.246V13.7759H131.285C131.973 14.6099 132.923 15.0269 134.146 15.0269C134.805 15.0269 135.426 14.9106 135.998 14.6681C136.57 14.4354 137.065 14.0959 137.472 13.6692C137.879 13.2425 138.209 12.709 138.442 12.0883C138.674 11.4676 138.791 10.7791 138.791 10.042C138.791 9.46016 138.713 8.91702 138.568 8.39332C138.413 7.86962 138.199 7.40411 137.928 6.99677C137.656 6.58943 137.327 6.23059 136.958 5.92993C136.58 5.62935 136.153 5.39655 135.687 5.24137C135.222 5.0862 134.727 4.99889 134.223 4.99889ZM133.671 12.6993C133.195 12.6993 132.769 12.5927 132.38 12.3793C131.992 12.166 131.692 11.8459 131.468 11.4386C131.246 11.0313 131.139 10.5754 131.139 10.0517C131.139 9.67351 131.197 9.31467 131.324 8.97519C131.449 8.64548 131.624 8.35451 131.847 8.11211C132.06 7.87931 132.332 7.68532 132.642 7.54959C132.952 7.41379 133.302 7.33616 133.671 7.33616C134.378 7.33616 134.97 7.58833 135.445 8.08297C135.911 8.58731 136.153 9.23704 136.153 10.0517C136.153 10.8373 135.92 11.4774 135.455 11.9623C134.989 12.4569 134.397 12.6993 133.671 12.6993Z" fill="black"/>
                        <path d="M41.1665 15.1643C41.9666 15.1643 42.66 14.8799 43.229 14.3109C43.798 13.742 44.1002 13.0663 44.1002 12.2662C44.1002 11.4839 43.798 10.7905 43.229 10.2215C42.66 9.65254 41.9666 9.35022 41.1665 9.35022C40.3308 9.35022 39.6196 9.63474 39.0506 10.2037C38.4816 10.7727 38.1972 11.4661 38.1972 12.2662C38.1972 13.0841 38.4816 13.7598 39.0506 14.3287C39.6196 14.8977 40.3308 15.1643 41.1665 15.1643Z" fill="#E7332B"/>
                    </svg>
                    </div>
                    <div className='mt-4'>
                    <p className='text-gray-500'>HNG Internship 9 Frontend Task</p>
                    </div>
                    <div className='mt-4'>
                    <img src={I4GLogo} alt="ingressive for good" className='w-28 '/>
                    </div>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact