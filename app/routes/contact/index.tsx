import {
  Button,
  Center,
  Container,
  Input,
  Modal,
  ModalOverlay,
  Spinner,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { VFC } from "react";
import { ActionFunction, Form, redirect } from "remix";
import { transporter } from "~/utils/mailer";

export const action: ActionFunction = async ({
  request,
}) => {
  const formData = await request.formData();
  const value = Object.fromEntries(formData);
  const { name, email, message } = value;

  try {
    await transporter.sendMail({
      from: `"commerce site" <${process.env.MAIL_USER}>`,
      to: "shiki10masaoka14@gmail.com",
      subject: "New contact request",
      text: [name, email, message].join("\n"),
    });
  } catch (error) {
    console.log("error");
    throw error;
  }

  return redirect("/contact/completionScreen");
};

const Contact: VFC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Container mt={10}>
        <Form method="post">
          <VStack spacing={8}>
            <Input placeholder="name" name="name" />
            <Input placeholder="email" name="email" />
            <Textarea
              placeholder="Details of your inquiry"
              name="message"
            />
            <Button onClick={onOpen} type="submit">
              send
            </Button>
          </VStack>
        </Form>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <Center minH={"100vh"}>
            <Spinner size={"xl"} color={"white"} />
          </Center>
        </ModalOverlay>
      </Modal>
    </>
  );
};
export default Contact;
