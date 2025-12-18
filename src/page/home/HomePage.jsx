import "./homePage.css";
import React, { useState } from 'react';
import { Button, Input, Drawer,Modal ,Space, message , Popconfirm ,Flex  } from "antd";

const HomePage = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  }
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

     const TestModalError = () => {
      Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      });
};
  const [messageApi, holder] = message.useMessage();
  const confirm = e => {
    console.log(e);
    messageApi.success('Click on Yes');
  };
  const cancel = e => {
    console.log(e);
    messageApi.error('Click on No');
  };

  return (
    <div className="container-home">

       {holder}
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button danger>Delete</Button>
      </Popconfirm>

      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
        <Button type="primary" onClick={TestModalError}>
        Open error
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

       <Flex gap="small" wrap>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
    </div>
  );
};


export default HomePage;
