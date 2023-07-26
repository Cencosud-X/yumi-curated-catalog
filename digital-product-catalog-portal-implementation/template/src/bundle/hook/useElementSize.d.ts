/**
   * Get the element size using a reference
   *
   * @param {Ref} myRef
   *
   * @return {const} return elementSize
   *
    const MyComponent = () => {
      const myRef = useRef()
      const { widthRef, heightRef } = useResize(componentRef)

      return (
        <div ref={myRef}>
          <p>width: {widthRef}px</p>
          <p>height: {heightRef}px</p>
        <div/>
      )
    }
  */
declare const useElementSize: (ref: any) => {
    widthRef: undefined;
    heightRef: undefined;
};
export default useElementSize;
