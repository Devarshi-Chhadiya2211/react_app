import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Sec4() {
    return (
        <div>
            <h1 className='text-center'>"ABOUT WELLWISHERS"</h1>
            <Accordion defaultActiveKey="0" className='w-75 m-auto pt-4'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <h5> Ares Capital Corporation CEO, Kipp DeVeer </h5></Accordion.Header>
                    <Accordion.Body>
                        “We’ve said this in the past that we’re likely to see defaults in the industry just increase this year. In the bottom quartile of our portfolio and probably everybody else’s, you have some companies that are making interest payments but continue to live off revolver availability, cash, etc., but the liquidity is getting tighter and tighter.”
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <h5>Accordion's Turnaround & Restructuring Team
                        Insights written by: Matt Tjaden and Pat O’Malley</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        Accordion's Turnaround & Restructuring team is comprised of seasoned restructuring, reorganization, and turnaround professionals who identify the factors contributing to cash flow and liquidity issues, rescue companies in crisis, and set them on a path from value stabilization to value creation. The team works directly with the company’s ecosystem of stakeholders to present the best options to resolve the business-threatening event. Once the immediate crisis is averted, the team engages in either a consultative or management role to implement the strategic changes needed to improve EBITDA, turnaround overall business performance, and deliver on the value thesis.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <h5>Quarterly topical: Private credit is big & getting bigger</h5>
                    </Accordion.Header>
                    <Accordion.Body>
                        Many have echoed the sentiment that the “golden age” of private credit is here and here to stay. With record fundraising in recent years and meaningful dry powder, growth in the asset class is obvious and well publicized in major financial publications. As AUM has increased, so has average fund size. Per PitchBook, private debt funds raised in 2023 had an average size of $1.1B, up from $621M in 2019. Median fund size shows a similar growth trend, from $206M in 2019 to $335M in 2023.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Sec4