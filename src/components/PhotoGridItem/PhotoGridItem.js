import React from "react";
import styled from "styled-components/macro";

import { ImgSource } from '../ImgSource';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <ImgSource type="avif" src={src} />
          <ImgSource type="jpeg" extension="jpg" src={src} />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 4px 0;
  font-size: 0.875rem;
  font-weight: 475;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  color: var(--color-gray-800);
  display: inline;
  
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export default PhotoGridItem;
