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
import { ParentOne } from './stae-uplif-prp/ParentOne';
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

      <h2>Use REFRENCE </h2>
      <RefrencePrac />


      <UncontrolledForm />
      <FunctionSender />
      <h2>FORWARD REF</h2>
      <Refsender />
      <FormStatus />
      <DerivedState />

      <Parentmajor />
      <UpdateObj />

      <UpdateArray />
      <h1>Hi this is Use Action</h1>
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





      <hr></hr>
      <hr></hr>
      <hr></hr>
      <h1>UPLIFT</h1>
      <ParentOne />
    </>
  );
}

export default App;
