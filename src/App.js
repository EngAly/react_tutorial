import React from 'react';

// tutorial part
import Hello from './basics/1_hello'
import HelloName from './basics/2_varInClass'
import InitialState from './basics/3_getInitialState'
import Posts from './basics/4_loopOnArray'
import ShowClassChild from './basics/5_showClassChild'
import PropsAndState from './basics/6_propsAndstateDifference'
import FunctionComponent from './basics/7_fucnctionComponent'
import Constractor from './basics/8_constractor'
import Post from './basics/9_callClassInClass'
import ReactVersion from './basics/10_getReactVersion'
import Animals from './basics/11_passObject2Component'
import ChangeName from './basics/12_makeEvtOnClick'
import BeforeRender from './basics/13_getDerivedStateFromProps'
import AfterRender from './basics/14_componentDidMount'
import ShouldComponentUpdate from './basics/15_shouldComponentUpdate'
import DidUpdateMethod from './basics/16_componentDidUpdate'
import StyleObject from './basics/17_styleObjectInReact'
import CSSObject from './basics/18_cssObjectInReact'
import Sass from './basics/19_sassWithReact'
import ReactLifeCylce from './basics/20_mostReactLifeCycle'
import Events from './basics/21_events'
import Heros from "./basics/22_error-handling/Heros";
import State from "./basics/23_state/State";
import UserName from "./basics/24_contex/UserName";

// project part
import MarketItems from './project_1/additemtolist'
import LikeDislike from './project_2/likeDislike'
import Counter from './project_3/counter'
import Table from './project_4/Pagination'

// advanced tutorial
import AdvancedTutorial from './advancedTutorial/AdvancedTutorial'

// Higher Order Components
import HourClock from './hoc/hourClock'
import MinuteClock from './hoc/minuteClock'


// 
import Hooks from './hooks/Hooks'

function App() {
  return (
    <div>
      {/* lesson 1 => print hello world*/}
      {/* <Hello /> */}

      {/* lesson 2 => pass vlaue for variable*/}
      {/* <HelloName username="ali ahmed" /> */}

      {/* lesson 3 => */}
      {/* <InitialState /> difference between getInitialState and constractor*/}

      {/* lesson 4 => loop on array angd get all fields in it */}
      {/* < Posts /> */}

      {/* lesson 5 => show child of defined classes i.e <Class> will show me because by default i hidden</Class> */}
      {/* <ShowClassChild name="ali ahmed"> and my age is 26 years</ShowClassChild> */}

      {/* lesson 6 => clear the difference between props & state 
      props => get first varibale asigned value.
      state => get final variable asigned value. */}
      {/* <PropsAndState  name="aly ahmed mohamed"/> */}

      {/* lesson 7 => what is function component (it must start with capital letter)
      i like  Class component, but Class components have some additions */}
      {/* <FunctionComponent /> */}

      {/* lesson 8 => clear the Constractor concept 
      note:- you can declare and init all vars in constractor */}
      {/* <Constractor /> */}

      {/* lesson 9 => how to call class inner other class and get its contents */}
      {/* <Post /> */}

      {/* lesson 10 get react version */}
      {/* <ReactVersion /> */}

      {/* lesson 11 => pass object from component to other component */}
      {/* <Animals /> */}

      {/* lesson 12 => make event on button click your action will change username */}
      {/* <ChangeName /> */}

      {/* lesson 13 => method will called before render method in react lifecycle */}
      {/* <BeforeRender favMaterial="Computer Science" /> */}

      {/* lesson 14 change variable after redering component
      in this eample will change variable value after 5 seconds*/}
      {/* <AfterRender /> */}

      {/* lesson 15 shouldComponentUpdate method in react lifecycle */}
      {/* <ShouldComponentUpdate /> */}

      {/* lesson 16 The componentDidUpdate method
       is called after the update has been rendered in the DOM:*/}
      {/* <DidUpdateMethod /> */}

      {/* lesson 17 how to style tag in JSX*/}
      {/* <StyleObject /> */}

      {/* lesson 18 make group of css and put them into variable and pass them to style attribute */}
      {/* <CSSObject /> */}

      {/* lesson 19  how to use dynamic css(sass) with react*/}
      {/* <Sass /> */}

      {/* lesson 20 react lifecycle methods it contains most react methods*/}
      {/* <ReactLifeCylce /> */}

      {/* lesson 21 most events in react  */}
      {/* <Events /> */}

      {/* customize error */}
      {/* <Heros /> */}

      {/* show all cases of state  */}
      {/* <State /> */}

      {/* explain how to pass property for all childs using provider and consumer
      super parent can support all childs with property without using this.props.property
      each time you can pass it to all down child with provider and any child can call it
      using consumer
      */}
      {/* <UserName /> */}



      {/* small project simulate as you market in souq and you can choice items or products you want */}
      {/* <MarketItems /> */}

      {/* like and dislike can put it in your blog to posts or subjects */}
      {/* <LikeDislike /> */}

      {/* counter as counter things or maybe another needs */}
      {/* <Counter /> */}

      <Table />


      {/* this advanced tutprial that show some advanced/tricky subjects in react goto 
      advancedTutorial folder there multi lesson*/}
      {/* <AdvancedTutorial /> */}





      {/* test increate hour by one each click  using hoc
      note that there common problem here when i pass property to one of original component
      will erased Why go to Clock => A higher-order component HOC (is an advanced technique
       in React for reusing component logic.) and will get the solution
      */}
      {/* <HourClock name="hello HOC" /> */}

      {/* test increase minute by one each click */}
      {/* <MinuteClock /> */}





      {/* complete tutorial how to statrt with hook (functional component) please go to Hooks
       file for more information */}
      {/* <Hooks /> */}

    </div>
  );
}

export default App;
