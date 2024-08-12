// import React from 'react'

// function Sec1() {
//   return (
//     <div></div>
//   )
// }

// export default Sec1

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function CardExample() {
  return (
    <div className="d-flex justify-content-around text-center">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAAC4CAMAAAAYGZMtAAAA9lBMVEX////6+vr19fXu7u7+/v6n2X/Zf3+zAABQswDw8PCwAAD09PTs7OxHsAD4+PjXd3en1ZTD4rPUgoLj4+Oi13an1ILf39/Yenqq2oPYlpbcp6fg4OD89fXwz8+h13W5LS3gl5fJb2/AwMC84KbS67/1+/HW1tbrx8fisbHo9d+94qHrv7/139/KysrQe3vR6cN/xVePynW235fg8tS7u7u3JCRzv0nw+OrEUlJeuCn03NzT6crdjY2jo6P56urZoaHhnJyVlZUtqQC83KzUa2u+PT3FXFyIyGVrvTjcsrK2Fha4KSnPg4OWznuf0Yex15/AS0t9fX0pTVoUAAAQ9ElEQVR4nO2di2PaNhPAJVtNq1pxHm6dhUeXOkWBEidt8coaArTd1se+NNv+/3/m00nG+CHbQCAB6msaFPksnX4+ydL5AUKV6IWsmUxtWqV9hUiwTuwZ8/SZdyiSGHWH1Q2ZdpjjMGu+upN5hmUZVPxKiUHpcpDcTXEWTQeEmiat2wYVRExKqcOo45gLlmgbhkCSFWqtMxLGqHAEy6KOVQcE1GSCiXAPx5Qi/hZcTLJQ3RuAJK1tUsZMJp1DOANTEOBDkKHmVMQ2ywAPshUaJkBSinWcknWuNxJsU9l06OGEAAurzhj0EwAg/WGKJCNiX3AgKMFiAp6AwuqOtcFICPCAI0tFQyQZM8SRFS2SkBh0LCeEJxzJocWOsjgSmwJ+Cr/nRELAeeHHonkqcFDh1MFCANCqpFvMhkSnKDjbuKD/LIpEHjMK3VocOu04loPDVqOAOuqQNsQJXxHC1IBuL/501EGl87R0dkXhM9CVrByrF0USP1pyqJfNo+IsEDZQdH5qmaZlE9Vk8WlbBoPGUtkZ4MBLP1YCXSOixQqHiLsiCbuSI71leUgS/hv9EZ4HIidgUTL8VN7PkjtP8NCwf9Bp4StCoioWLr4yJAk46uCbdDoKqPbGWjqz/StFAu4dQlglkiXbv3IkcjghLiOrRVJOK2HWTJqlZS7ScSZewkyYqxB7ZUjEeZ+ZtLANbPpJc+YZKU03OcTkKjKYyZeVyNSYVWdOnYlFAa5PxngxoWCiF9liCmDbkgK1mS0ypJiLI+EmZ2603CiwX56p3BmQ0Lpjuo5bRC9UdF1X1G0W1k2FivgnPusu44TXzXCog0MpTkQu93zf55Zt2I7PfOYG4i/OfY8vjESY5XBRW5n9AkmdubMgEUy4Wy+kN2HHuGu6vLBuKsxzWV2QqYszP68nS6XU5a74EVxoPfBdNxh6okVc5DgLjyVyJcHK7YdO4zrFg8CkP9SFlxQ1NFIUaz23sDMKRUeYJz5d4aSCiZtSoA4QEP9d4Ru+73m+/MMtRVJglkqzbJ5WsVhimoxl84qLXFCxzkORziJhKClGMvsMfgPFzhFciKSSSiqpZHbhlkN9RH3ipS9hEEsz411c5ittldoa9SjHIsgPDM9zmMeGtq8jhgsSRdsirhFoK19JkxVpRwVMSyrQXtSU2DyeeJ+Q5/F64AaObi5L7MlVsGwC25NLcEVK0VU0I99YTdZUexYkkfZsSLKmTAuQf1jEsUgd6YhgyjJTnWkCVnSUIKtQKfykeHOQFAkpvhwoC7Vw8eJxInS+jrOJSHCIwjRKijNsacqWIMEUdR+D/JW5oG6I5YEcj5lloOYJSFNbBqyr4NPcGiRfngKSp+nmupxgxHyskBwegZykqgGhvkmwAYupLUTyCQXcM4f1oVwr+kisHW2HKSTXOyAnyHV8yw7E6YVZxJDVOZYpVpeEbyWSgA+ZQGJ7cosPJyhO3SQS5PkexB58P/CGAehxW+j5xN9KJL7vQLwFqQmdb3PHp4ynkZgQvxtyxn1PehM3He641nZ6SWoLR2JGAnjUWCKITMaSpPjItqTe9iBpP5WSiaxw3+K+GEokkrNrEO0Zx+EQBUVbg6RwquYy+VE6L2Eqdrcl85IZZq+E/lyzV2QvbY1jbtAax7Rg2iB+sss+WMAak/itJgF3P5ESpckVR0KszOI4Smiystoapax2kVJR4dMCxIgQiLkEp547ZGkmxLBt25qErjWJom1RwpikzHwlTdZUe1KAUVBLpF1kiqEpPJNjEBIMxbzKYZ4zNOYNIZGCbTN560wdJ9r//joOg5mUQznREimqYs6o2uaMJSVShqRzBzu2FMnpHeyokOQrPSgS0kcVkqQprUtUIVkpksHg+eCSyKyz0Tx2JBPbhOTJ7u7u51aFJEpg9OHJkye7FZLtRdJAZdIsqSKJpNmYx45kYk2QfERl0i6pIo6ke3xxfHy+gUgud0UTfqicMSqTbl4VZNB71+slkFxANLK7oUh23yaQGLCgNeTVcpSSLJL+pUz0P4sTzRPYMYbk8ePVIFnxSjiOpKYyncAL/MD2Pd93UVK6cKd5dKM5tf8QHHZvbWr0wdk+YEqxQmJQLJF8F9tUdCO2W3QzC4uyMglN1lR7UoCVVcpqa7ZFCUtjiq2QNJhhnTVvmk245YZ5fOgxxzM/ZaID7WYzAfsA9t4HL5FI9F7SuGqeXY020Esa0PUfQ6YPN0n79bpPvamFSo6fPm0UIcE6JF0o+eUGjiUYLlj9horlGC7flCARXelzColIXPyUSHYlkq9vvr15XyEJveRbYiX8cnISXgckOZG+ZSIZqb0jJEIOEEogORsfHo/P40jwuFartR8EyR96pWUiqam940iARDJeEk7oIyRyBP/7QZAc6JXuHUm47IshEVX8uv5IYNr5tUISM6Wzv/92/9XcSML1XzGSUabjbASSaCU8D5LGaDwa4VIkYRUPj+Ty9O3p685KkXyBcfJsc5C8heDnpdzWOEcrQfISGpmLJG3j/SPpTbTDkNdbMFMhGXXRzEima5wC2RAkpxPtscpaEAlqXl1fXeXTkFKGRHvngFz2LRNJ8Uq4/+brt68/YuGOBJLGGZodSRQv4Z4f8IDwwA1YFgk1KFZIbIiXABJbxh/+gVCKJjZhN49vXh5D4MSUSPCK4yWdz2Lh+R6DNh5jyGooJMLe8++1m+9NYQr9LqRrJ+Mlg366OlmAjJf4AcRL6CeUjpcs5CXRobkfL+nAcuu93kvkzZg3IjFSw0TSlEErU10YaPR94SWey716kI40LjSWiA68XCTFY0kRku9g+LFEIk8mcVM6g38OLlup6rqoTDYLyXj8cnyMZ0XyQ8zjPx/ozuLFSB4/bmwOEnnHcqMUyVmIBJRezY0kjNBvCBJ5X3sZkr+B26hCooZXGaf4VSmtBMllAZLuuiFpXBz+fnidRLLYWFKEBOUjwY0MksY9IMmOJdFJGKnFfBxJ79X+6UH/vpCEiTiS8T0g+d696H5PnHGaFzc3h+EVyJoq4H9PH6uxRDsvKZcwTLIEJLVkIzOJ1cxL4tohkuOb328uGgpJX1tdsZypAtcTSb+DFkASM2UhJGGB64mkM5CJDoROKyRxL+n/uH1zu18hEaZ8+/bt/SmKpkhxJF8/R1G1aZH3hKT4SYtlIdGuhP9JzRrjSLTh6HmQcO4GToDqgZlZCctXuuTES2S0ouBejkS8REUylhgvsSWSW2mKDaGbWLxE5PyRKdKWoZCEKdl4iaoF4iXIz4mXhIzX0UtOdV4ynhSg8ZIxmsNLAm77AfcDP9C+ZW09x5I4ktcT7fNJARokV2gthlchcvl5BXFevDIkrUSLcpBEBSwJieY6jtxUiARFY1q0Is/VvhOSZIvuBQkRxRC0CJKwA8u1VjmSXiJrVUii5dZdkIQL2ZUjSV43vAuSnIQsoJksPFtAucRK3gokqcKzBZTLXZB8RBWSVOIcVUj0dhQjicbCCskkEZGY3rwzQhWSJBJ5/X67kcSmaiOcUdIgOUfbjqQJjzCoCX03+2hXGknjvHt23thQJLO/mSKaRWuedksjOQafGs+xEk62aAlIuEs59ZDpY/0rcBPP48wTL4mFO8IgBb6By081nIxk/BN+vUSYwMewyhzjsniJkFs7G+6Y93kcbbzEH3LPcTw2xGXvL7mzl8jWtku9RCjV8rzkQF19ufzx9usP7cW6JXiJEXiex12PB3Xt1zksYSzRIgl70KB32xsUIkmOJQeTC1JhODrToiUgcTFmiBnEQXWkkxUhITWp1IJrDp/nQHJJwsI7PX2LNuOME63I40jaUqn15MOHD09mRtLp7Q96ra1AcqVqzSJB0YSeCCSkDMl78KnBViAJa9UiCZ3jPVx96ZUgeQMW9H4WJL3e896gtWlI/oADebsiJDONJXEkA32L7hcJwa0OIWuCBOfcHnK/SDKJh0SS16KtQhKeeiokmQd6KiQVkgpJ0o6bzUBiI2KLX0j+0khRFfN7yW+/PQ5XwhGSfmq/ouDA/SBxgsBRr3Tx0q90SYWQsolZQ0iTKI18By+G55i+fPnryzHW3XJTFEJqSCQDu+AGnaWEkDwcqFe65N1yk099Xi+Jtp2l3tWwXl6iXuni6l7pUlbF4q/AnQdJzko4r0UbNrxG2xZFEouXJHf7eZHEomrJ3X5mJActVCGpkOiR9FGFJIXkNaqQpJCcogpJAsmTD+JfhSSOBB5D2lUl9bf3JPx0QSQ5tWw+kitY9o0rJEk72nGlHCRYPoS9SUju9GUwiZdvJ5FEt9w05NO9KESC7gsJ99Aw55UuS4+X5CrFsygdjcROoE3b8OIYy5ZIVvMK3EyOjJcMh8WPKOVTv4uXJBJ5xx0e3r5/L/F97IWvdNF+/dqqxpJEQtvI8y9f/v1ys1ljyYqRNOFM/W+FJIFEnHp+r5BUSPKzKiQaG6dI4B6/CkkCye3+m/1bPZKelP5PhyQWL0lrP3om5MWr6ZXKCskvj4Q8q5CsDZLW83cgnYdAciBL6ryS8oBImh8/xp8BaL2A6l8sFUmr32qJ/6VIVEmXL+TI8YBIuntHJ3Ekz2T1S0BC4Nvdd46aBL17AfI6B4mQfxNIlAUPieRo5yTjJc8600v5hUhOdg4PD3faSGfHHiDZAyRQ5KNTLZKzdvuw3R7F7hyYImlJIUtA0pHSSsRLuOPnvNIFvCT2PFE/RFIcLwm/a5ri6yMhezXDCr932mBXh/A994cjau3JbWeWLZE8O9XdMWL/ubf3+9Fe17IsCiI+QyRgihRhikT67GDheImlShok4yVG3v0li3hJ4/pEyPUVQdeyc7TFkDQGqSH7XDlHg8zmJap3nSHRu2AEeYemXjI5Onf3EqKK7MVvwYJwWs4rXbpHOWOJcrY+wa+eg7yLI9k7ClsbIWlLn9iZIsEki6QxkiLGJ5UgMSSvpdLrYiTnV1IWRTLXWHJeawupkRiSR/KwHRB8ILOeJ5DI1sa9pC3bdliIhHRFN9nbO0LkXCb+HNlzIhnDbnvX94GENFXHjyNRdgASaey7ZSCRSjuIjNS2uZHUpLo4hP3s5CWLpCOnWO/IokikjRuDpKcmL/GB7lJC6sSQ9NQcqxVDcnKozpDbiEQpEdxQXVCYotaGYgbchDGg3RVeopTiSK6hgKPa0pBcnXwUcoLXCklkSmhvONKLAUeH5GRnqUgmA05j3ZFIpftBcjVpbYWkQlIhqZBUSCokCyCBEFKEhEyialEVhEzWOBESEkNylECyk78SfiZa293TI9mLkEQr4RcTJC8ySMBeheQFIXlIjgSSUKkVWwmfRFM1Xq9z6iPTJ5lXunQvDo+xdXYBM90LSvuPYNn7qENtuf59fmDRg1/kStimzYmSqRJNiuUE+aJt2G2ZdYjZldo2otaRTEC8RJZ0altdpWTQ81CJGSrRtYxTqfTasC5l4pExNcVQprxiuCbVjzEdqG0WHakCriJ7DUOZco1ZTylRaqnEgIX21mx4pQsKil7p8hOKHXiWeqWLo32lS4FA7JXKBSYuV46EIHse9flE/zBegXa6Z4C4WKBw4JUu6efYSmVocGvIkBlw/d06SfkP/Ue45aIgYMNy7U/iOHHMkdD9VK7NA3vImEOx736agbc0hTqo7gVBufY8MuSB73nI8l1P+47llLYvWAQW9j1rBnf0fI97gejKnvcpHRPOijDE50PRPI/4MziKMMUZBgRx5i0ZCUceFVb7vO6XewlxuSO6J0a+O4s7wou8PO5AJTOoO1TY4HMkDHHLvSQ0BRExVlTjZyWVVFJJJZWsufwf2D/4+EcINLYAAAAASUVORK5CYII=" />
        <Card.Body>
          <Card.Title>SHARE UPDATE</Card.Title>
          <Card.Text>
            <h6>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, praesentium?
            </h6>
          </Card.Text>
          <Button variant="primary">SEARCH</Button>
        </Card.Body>
      </Card>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://previews.123rf.com/images/alexeyzatevahin/alexeyzatevahin2005/alexeyzatevahin200500012/146203838-stock-market-chart-on-blue-background-share-drop-down.jpg"></Card.Img> 
         <Card.Body>
          <Card.Title>SHARE UPDATE</Card.Title>
          <Card.Text>
            <h6>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, praesentium?
            </h6>
          </Card.Text>
          <Button variant="primary">SEARCH</Button>
        </Card.Body>
      </Card>

    
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/display-stock-market-quotes-chart-graph-monitor-live-online-screen-profit-capital-growth-financial-success-concept-price-44296350.jpg"></Card.Img>
        <Card.Body>
          <Card.Title>SHARE UPDATE</Card.Title>
          <Card.Text>
            <h6>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, praesentium?
            </h6>
          </Card.Text>
          <Button variant="primary">SEARCH</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.cepal.org/sites/default/files/styles/1920x1080/public/images/featured/76_0.jpg?itok=ULQbOmdn" height={"200px"}></Card.Img> 
        <Card.Body>
          <Card.Title>SHARE UPDATE</Card.Title>
          <Card.Text>
            <h6>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, praesentium?
            </h6>
          </Card.Text>
          <Button variant="primary">SEARCH</Button>
        </Card.Body>
      </Card>
      
     
    </div>
  );
}

export default CardExample;