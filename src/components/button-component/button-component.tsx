import { Component, Prop, h } from '@stencil/core';
// import styles from './index.module.scss';


@Component({
  tag: 'button-component',
  styleUrl: 'index.scss',
  shadow: true,
})
export class ButtonComponent {
  @Prop() loadingText?: string = "Un momento...";
  @Prop() type?: "submit" | "reset" | "button" = "button";
  @Prop() size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = "sm";
  @Prop() theme?: 'fill' | 'ghost' | 'outline' | 'tonality' | 'outlinewhite' = "fill";
  @Prop() class?: string = "";
  @Prop() loading?: boolean = false;
  @Prop() disabled?: boolean = false;
  // @Prop() id?: string;
  // @Prop() onClick?: () => void;

  render() {
    let classSize = "";
    switch (this.size) {
      case "xs":
        classSize = "c_button__SizeXsmall"
        break;

      case "md":
        classSize = "c_button__SizeMedium"
        break;

      case "lg":
        classSize = "c_button__SizeLarge"
        break;

      case "xl":
        classSize = "c_button__SizeXlarge"
        break;
    }

    let classTheme = "";
    switch (this.theme) {
      case "ghost":
        classTheme = "c_button__ThemeGhost"
        break;

      case "outline":
        classTheme = "c_button__ThemeOutline"
        break;

      case "tonality":
        classTheme = "c_button__ThemeTonality"
        break;

      case "outlinewhite":
        classTheme = "c_button__ThemeOutlineWhite"
        break;
    }

    let className = `c_button ${this.class || ""} ${classSize} ${classTheme}`;

    return (
      <button
        type={this.type || "button"}
        disabled={this.disabled || this.loading}
        class={`${className}`}
      // onClick={onClickButton}
      // id={this.id}
      >
        {/* {this.loading && <SpinComponent className={styles.c_button__spin} />} */}
        <div class="c_button__text">
          {this.loading ? this.loadingText : <slot />}
        </div>
      </button>
    );
  }

}
