// import { useState } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ConditionCounter from './StatePractise';
import './App.css';
import Sendingprops from './Proppractise1';
import Inputpractise from './Inputpractise';
import Form from './ControlledComponant';
import JsxMapping from './MapPractise';
import ComponantSending from './ComponantMappingSending';
import LoopComponantsender from './NestedLoopPracticeSender';
import EffectPractise from './UseEffectPractise';
import RefrencePrac from './UseRefrencePrac';
import UncontrolledForm from './UncontrolledComponant';
import FunctionSender from './PropFunctionPassSender';
import Refsender from './ForwardRefSender';
import FormStatus from '../UseFormStatusPrac';
import DerivedState from './DerivedStatePrac';
import Parentmajor from './Stateupliftparent';
import UpdateObj from '../ObjectUpdatePrac';
import UpdateArray from './ArrayUpdatePrac';
import UseAction from './UseActionHookPrac';
import CustomToggle from './CustomToggle';
import { Collage } from './Collage';
import { RouteExampleone } from './ReactRouterExample1';
import { RouterMajorBox } from './RouterMajorBox';
import { GetApi } from './GetApiPrac';
// import RefrencePrac from './UseRefrencePrac';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <ConditionCounter /> */}

      {/* <Sendingprops /> */}

      {/* <Inputpractise /> */}

      <Form />

      <JsxMapping />

      <ComponantSending />

      <LoopComponantsender />

      <EffectPractise />
      <RefrencePrac />
      <UncontrolledForm />
      <FunctionSender />
      <Refsender />
      <FormStatus />
      <DerivedState />

      <Parentmajor />
      <UpdateObj />

      <UpdateArray />
      <UseAction />

      <CustomToggle />
      <Collage />

      <RouteExampleone />

      <hr />
      <RouterMajorBox />
      <hr />
      <h4>API COURSE </h4>
      <hr />

      <GetApi />
    </>
  );
}

export default App;
