import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import TaskModalBody from "components/taskmodalbody";
import { useRouter } from "next/router";
import Loading from "../../components/loading";
import Tasks from "../../components/tasks";
import useAccount from "../../lib/api/account";
import useTasks from "../../lib/api/tasks";
import parentpath from "../../lib/parentpath";

const TasksDefault = () => {
  const router = useRouter();
  const { id } = router.query;
  const { onClose } = useDisclosure();

  const { data: tasks } = useTasks();
  const { data: account } = useAccount();

  if (!tasks || account === undefined) {
    return <Loading />;
  }

  const filterdTasks = tasks.filter((t) => t.id === Number(id));
  if (filterdTasks.length !== 1) {
    return <Loading />;
  }
  const task = filterdTasks[0];

  return (
    <>
      <Tasks tasks={tasks} team={account} />
      <Modal
        isOpen={true}
        onClose={() => {
          onClose();
          router.push(parentpath(router.route), undefined, {
            scroll: false,
            shallow: true,
          });
        }}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <TaskModalBody task={task} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TasksDefault;

export const getStathcPaths = async () => {
  const ids = [
    61275121,
    175516696,
    414358294,
    472626810,
    742936355,
    1356482943,
    1806181470,
    1808665617,
    1864208894,
    1869996516,
    1911909652,
    2057125610,
    2371015041,
    2415905059,
    2743599748,
    3052303659,
    3185466810,
    3224520613,
    3359320973,
    3443755021,
    3817990360,
    3902500811,
    3950178220,
  ];
  const paths = ids.map((id) => ({
    params: { id },
  }));
  return { fallback: false };
};
