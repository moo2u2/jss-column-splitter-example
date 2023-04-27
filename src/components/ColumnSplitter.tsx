import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

export interface ColumnSplitterProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams & {
    Styles1: string | null;
    Styles2: string | null;
    Styles3: string | null;
    Styles4: string | null;
    Styles5: string | null;
    Styles6: string | null;
  };
}

const ColumnSplitter = (props: ColumnSplitterProps): JSX.Element => {
  const stylesJSON = `${props.params.Styles ?? ''}`.trimEnd();
  const styles = `${props.params.GridParameters ?? ''} ` + (stylesJSON.length > 0 ? JSON.parse(stylesJSON).Value.value : '');
  const columnWidths = [
    props.params.ColumnWidth1 ?? '',
    props.params.ColumnWidth2 ?? '',
    props.params.ColumnWidth3 ?? '',
    props.params.ColumnWidth4 ?? '',
    props.params.ColumnWidth5 ?? '',
    props.params.ColumnWidth6 ?? '',
    props.params.ColumnWidth7 ?? '',
    props.params.ColumnWidth8 ?? '',
  ];
  const columnStyles = [
    props.params.Styles1 ?? '',
    props.params.Styles2 ?? '',
    props.params.Styles3 ?? '',
    props.params.Styles4 ?? '',
    props.params.Styles5 ?? '',
    props.params.Styles6 ?? '',
    props.params.Styles7 ?? '',
    props.params.Styles8 ?? '',
  ];
  const enabledPlaceholders = props.params.EnabledPlaceholders.split(',');
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component column-splitter flex ${styles}`} id={id ? id : undefined}>
      {enabledPlaceholders.map((ph, index) => {
        const phKey = `column-${ph}`;
        const phStylesJSON = `${columnStyles[+ph - 1] ?? ''}`.trim();
        const phStyles = `${JSON.parse(columnWidths[+ph - 1]).Class.value} ` + (phStylesJSON.length > 0 ? JSON.parse(phStylesJSON).Value.value : '');

        return (
          <div key={index} className={phStyles}>
            <Placeholder key={index} name={phKey} rendering={props.rendering} />
          </div>
        );
      })}
    </div>
  );
};

export default ColumnSplitter;