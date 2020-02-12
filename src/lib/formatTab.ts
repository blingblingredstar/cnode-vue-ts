import { Topic } from "@/custom";

export const formatTab = (topic: Topic) => {
  if (topic.top == true) {
    return "置顶";
  } else if (topic.good == true) {
    return "精华";
  } else if (topic.tab == "ask") {
    return "问答";
  } else if (topic.tab == "share") {
    return "分享";
  } else if (topic.tab === "job") {
    return "招聘";
  } else if (topic.tab === "good") {
    return "精华";
  } else {
    return "其他";
  }
};
