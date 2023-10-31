import React from 'react'

const certs = () => {

const CERT = {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc'>
                <li>
                    <a
                        className='font-semibold underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-700 via-black-500 to-primary-800  hover:bg-primary-800'
                        href='https://www.credly.com/badges/9f98423d-717e-4f45-bf24-910f52b92c40/public_url'
                        target="_blank"
                    >
                        Snowflake Hands On Essentials - Data Applications
                    </a>
                </li>
                <li>
                    <a
                        className='font-semibold underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-700 via-black-500 to-primary-800  hover:bg-primary-800'
                        href='https://www.credly.com/badges/bed25db9-4070-4056-8c43-9ec1d1d6e694/public_url'
                        target="_blank"
                    >
                        Snowflake Hands On Essentials - Data Sharing
                    </a>
                </li>
                <li>
                    <a
                        className='font-semibold underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-700 via-black-500 to-primary-800  hover:bg-primary-800'
                        href='https://www.credly.com/badges/e796f807-630d-4c73-a66d-f9e504e883cb/public_url'
                        target="_blank"
                    >
                        Snowflake Hands On Essentials - Data Warehouse
                    </a>
                </li>
                <li>
                    <a
                        className='font-semibold underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-700 via-black-500 to-primary-800  hover:bg-primary-800'
                        href='https://www.credly.com/badges/167a0548-b087-4111-a452-48721729735a/public_url'
                        target="_blank"
                    >
                        Snowflake Hands On Essentials - Data Lake
                    </a>
                </li>
                <li>
                    <a
                        className='font-semibold underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-700 via-black-500 to-primary-800  hover:bg-primary-800'
                        href='https://www.coursera.org/account/accomplishments/verify/6UFGWW5WMWJR'
                        target="_blank"
                    >
                        Convolutional Neural Networks
                    </a>
                </li>
                <li>
                    <a
                        className='font-semibold underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-700 via-black-500 to-primary-800  hover:bg-primary-800'
                        href='https://www.coursera.org/account/accomplishments/verify/LDEYU5RWAGJB'
                        target="_blank"
                    >
                        Structuring Machine Learning Projects
                    </a>
                </li>
                <li>
                    <a
                        className='font-semibold underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-700 via-black-500 to-primary-800  hover:bg-primary-800'
                        href='https://www.coursera.org/account/accomplishments/verify/7PZ6LQULJD2C'
                        target="_blank"
                    >
                        Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization
                    </a>
                </li>
                <li>
                    <a
                        className='font-semibold underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary-700 via-black-500 to-primary-800  hover:bg-primary-800'
                        href='https://www.coursera.org/account/accomplishments/verify/K3JC5KRA9SYB'
                        target="_blank"
                    >
                        Neural Networks and Deep Learning
                    </a>
                </li>
            </ul>
        )
    }

  return (

    <div className='text-black'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
              <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                  <h2 className='text-4xl font-bold text-black mb-4'>Certificates</h2>
                  
                     <div>
                      <div className='mt-8 text-gray-500'>
                        {CERT.content}
                      </div>
                    </div>
              </div>
        </div>
    </div>

 
  )
}

export default certs