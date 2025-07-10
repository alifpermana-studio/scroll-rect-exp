"use client";

import { useEffect, useRef, useContext } from "react";
import { DefaultLayoutTemplate } from "@/app/templates/DefaultLayoutTemplate";
import { ScrollRectContext } from "@/app/contexts/scrollContext";

export default function Home() {
  const { setTargetRef, percentFromTop } = useContext(ScrollRectContext);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTargetRef(targetRef.current);
  }, []);

  useEffect(() => {
    console.log("percent: ", percentFromTop);
  }, [percentFromTop]);

  return (
    <DefaultLayoutTemplate>
      <h1>Welcome to our website!</h1>
      <p>This is the main content area.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et
        egestas ante, nec sodales tellus. Curabitur consequat sem eget magna
        commodo maximus. Quisque accumsan mauris ante, sed tincidunt mauris
        blandit vitae. Aliquam aliquam sit amet purus quis porta. Praesent
        finibus justo eget ligula consequat scelerisque. Nulla sagittis pulvinar
        dui, ac pellentesque nisl suscipit nec. Sed nulla lectus, eleifend at
        eros ac, imperdiet pulvinar purus. Nullam sed sapien nisl. In iaculis
        lorem non dui pellentesque lacinia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et
        egestas ante, nec sodales tellus. Curabitur consequat sem eget magna
        commodo maximus. Quisque accumsan mauris ante, sed tincidunt mauris
        blandit vitae. Aliquam aliquam sit amet purus quis porta. Praesent
        finibus justo eget ligula consequat scelerisque. Nulla sagittis pulvinar
        dui, ac pellentesque nisl suscipit nec. Sed nulla lectus, eleifend at
        eros ac, imperdiet pulvinar purus. Nullam sed sapien nisl. In iaculis
        lorem non dui pellentesque lacinia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et
        egestas ante, nec sodales tellus. Curabitur consequat sem eget magna
        commodo maximus. Quisque accumsan mauris ante, sed tincidunt mauris
        blandit vitae. Aliquam aliquam sit amet purus quis porta. Praesent
        finibus justo eget ligula consequat scelerisque. Nulla sagittis pulvinar
        dui, ac pellentesque nisl suscipit nec. Sed nulla lectus, eleifend at
        eros ac, imperdiet pulvinar purus. Nullam sed sapien nisl. In iaculis
        lorem non dui pellentesque lacinia.
      </p>
      <p ref={targetRef}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et
        egestas ante, nec sodales tellus. Curabitur consequat sem eget magna
        commodo maximus. Quisque accumsan mauris ante, sed tincidunt mauris
        blandit vitae. Aliquam aliquam sit amet purus quis porta. Praesent
        finibus justo eget ligula consequat scelerisque. Nulla sagittis pulvinar
        dui, ac pellentesque nisl suscipit nec. Sed nulla lectus, eleifend at
        eros ac, imperdiet pulvinar purus. Nullam sed sapien nisl. In iaculis
        lorem non dui pellentesque lacinia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et
        egestas ante, nec sodales tellus. Curabitur consequat sem eget magna
        commodo maximus. Quisque accumsan mauris ante, sed tincidunt mauris
        blandit vitae. Aliquam aliquam sit amet purus quis porta. Praesent
        finibus justo eget ligula consequat scelerisque. Nulla sagittis pulvinar
        dui, ac pellentesque nisl suscipit nec. Sed nulla lectus, eleifend at
        eros ac, imperdiet pulvinar purus. Nullam sed sapien nisl. In iaculis
        lorem non dui pellentesque lacinia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et
        egestas ante, nec sodales tellus. Curabitur consequat sem eget magna
        commodo maximus. Quisque accumsan mauris ante, sed tincidunt mauris
        blandit vitae. Aliquam aliquam sit amet purus quis porta. Praesent
        finibus justo eget ligula consequat scelerisque. Nulla sagittis pulvinar
        dui, ac pellentesque nisl suscipit nec. Sed nulla lectus, eleifend at
        eros ac, imperdiet pulvinar purus. Nullam sed sapien nisl. In iaculis
        lorem non dui pellentesque lacinia.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et
        egestas ante, nec sodales tellus. Curabitur consequat sem eget magna
        commodo maximus. Quisque accumsan mauris ante, sed tincidunt mauris
        blandit vitae. Aliquam aliquam sit amet purus quis porta. Praesent
        finibus justo eget ligula consequat scelerisque. Nulla sagittis pulvinar
        dui, ac pellentesque nisl suscipit nec. Sed nulla lectus, eleifend at
        eros ac, imperdiet pulvinar purus. Nullam sed sapien nisl. In iaculis
        lorem non dui pellentesque lacinia.
      </p>
      {/* Other page-specific components/organisms */}
    </DefaultLayoutTemplate>
  );
}
