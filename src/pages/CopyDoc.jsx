import React, { Component } from "react";
import "./CopyDoc.css";

class CopyDoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
    };
    this.containerRef = React.createRef();
    this.uniqueItems = 0;
  }

  handleAddCopyItem = () => {
    this.uniqueItems++;
    let itemCount = this.uniqueItems;
    let newCopyItem = (
      <CopyItem
        delete={this.deleteCallback(itemCount)}
        defaultKey="git checkout |branch_name"
      />
    );
    let newItem = this.state.items;
    newItem["item" + itemCount] = newCopyItem;
    this.setState({
      items: newItem,
    });
  };

  deleteCallback = (index) => {
    return () => {
      let newItem = this.state.items;
      //delete newItem['item'+index]
      newItem["item" + index] = false;
      this.setState({
        items: newItem,
      });
    };
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      "item" + this.uniqueItems in prevState.items &&
      "item" + this.uniqueItems in this.state.items
    ) {
      let a = this.containerRef.current.getElementsByClassName("key-input");
      let e = a[a.length - 1];
      if (e) {
        e.select();
        e.focus();
      }
    }
  }

  getActiveItems() {
    if (!this.state.items) return 0;
    let count = 0;
    for (let a in this.state.items) {
      if (this.state.items[a]) count++;
    }
    return count;
  }

  render() {
    return (
      <div className="CopyDoc">
        <div>
          <div className="item-container" ref={this.containerRef}>
            {Object.values(this.state.items).map((val, index) =>
              val ? <React.Fragment key={index}>{val}</React.Fragment> : ""
            )}
            <div id="add-container">
              <button className="add-button" onClick={this.handleAddCopyItem}>
                ┼
              </button>
              {!this.getActiveItems() && (
                <div className="copy-helper">
                  ← click to add a new copy item
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CopyItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.defaultKey,
      components: ["git checkout ", "branch_name"],
    };
    this.lineRef = React.createRef();
  }

  getLine() {
    let segments = this.state.key.split("|");
    let isInput = true;
    return segments.map((t, index) => {
      isInput = !isInput;
      if (isInput) {
        return (
          <ResizeInput
            key={index}
            default={t}
            setValue={this.setComponentValueCallback(index)}
          />
        );
      }
      return (
        <span className="val-const" key={index}>
          {t}
        </span>
      );
    });
  }

  setComponentValueCallback = (index) => {
    return (value) => {
      let c = this.state.components;
      c[index] = value;
      this.setState({
        components: c,
      });
    };
  };

  handleNewKey = (event) => {
    let newComp = event.target.value.split("|");
    let oldComp = this.state.key.split("|");

    //dont change component segment of unchanged key segments
    newComp.forEach((c, index) => {
      newComp[index] = c === oldComp[index] ? this.state.components[index] : c;
    });

    this.setState({
      key: event.target.value,
      components: newComp,
    });
  };

  handleCopy = () => {
    let copyData = this.state.components.join("");
    let promise = navigator.clipboard.writeText(copyData);
  };

  render() {
    return (
      <div className="CopyItem">
        <button className="copy-button" onClick={this.handleCopy}>
          <span className="copy-symbol"> ⎘ </span>
        </button>
        <div className="command-container">
          <div className="line-container" ref={this.lineRef}>
            {this.getLine()}
          </div>
          <input
            className="key-input"
            type="text"
            defaultValue={this.props.defaultKey}
            onChange={this.handleNewKey}
          />
        </div>
        <button className="remove-button" onClick={this.props.delete}></button>
      </div>
    );
  }
}

class ResizeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.default,
      default: this.props.default,
      width: this.props.default.length + "ch",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.default !== prevState.default) {
      return {
        value: nextProps.default,
        default: nextProps.default,
        width: nextProps.default.length + "ch",
      }; // <- this is setState equivalent
    }
    return null;
  }

  handleSize = (event) => {
    this.props.setValue(event.target.value);
    this.setState({
      value: event.target.value,
      width: event.target.value.length + "ch",
    });
  };

  render() {
    return (
      <textarea
        className="val-input"
        type="text"
        value={this.state.value}
        onChange={this.handleSize}
        style={{ width: this.state.width }}
      />
    );
  }
}

export default CopyDoc;
//ReactDOM.render(<ItemContainer />, document.querySelector("#app"));
