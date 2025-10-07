'use client';
import React, { forwardRef } from 'react';
import { ReactLenis } from 'lenis/react';
import './component.css';                 // 👈 importa el CSS nativo
// opcional: si vas a reemplazar la columna por tu galería
// import ImmersiveScrollGallery from '@/components/ImmersiveScrollGallery';

const Component = forwardRef<HTMLElement>((props, ref) => {
  return (
    <ReactLenis root>
      <main className="cmp-main" ref={ref}>
        {/* HERO */}
        <section className="cmp-hero">
          <div className="cmp-hero-grid" />
          <h1 className="cmp-hero-title">
            Create Gallery In a Better Way
            <br />
            Using CSS sticky properties <br />
            Scroll down! 👇
          </h1>
        </section>

        {/* GRID + STICKY */}
        <section className="cmp-section">
          <div className="cmp-grid">
            {/* Columna izquierda */}
            <div className="cmp-col">
              <figure className="cmp-fig">
                <img
                  src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                  alt=""
                  className="cmp-img"
                />
              </figure>
              <figure className="cmp-fig">
                <img
                  src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                  alt=""
                  className="cmp-img"
                />
              </figure>
              <figure className="cmp-fig">
                <img
                  src="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop"
                  alt=""
                  className="cmp-img"
                />
              </figure>
              <figure className="cmp-fig">
                <img
                  src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop"
                  alt=""
                  className="cmp-img"
                />
              </figure>
              <figure className="cmp-fig">
                <img
                  src="https://images.unsplash.com/photo-1719411182379-ffd97c1f7ebf?w=500&auto=format&fit=crop"
                  alt=""
                  className="cmp-img"
                />
              </figure>
            </div>

            {/* Columna central sticky */}
            <div className="cmp-sticky">
              <figure className="cmp-fig cmp-fig--full">
                <img
                  src="https://images.unsplash.com/photo-1718969604981-de826f44ce15?w=500&auto=format&fit=crop"
                  alt=""
                  className="cmp-img cmp-img--full"
                />
              </figure>
              <figure className="cmp-fig cmp-fig--full">
                <img
                  src="https://images.unsplash.com/photo-1476180814856-a36609db0493?w=500&auto=format&fit=crop"
                  alt=""
                  className="cmp-img cmp-img--full"
                />
              </figure>
              <figure className="cmp-fig cmp-fig--full">
                <img
                  src="https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=500&auto=format&fit=crop"
                  alt=""
                  className="cmp-img cmp-img--full"
                />
              </figure>

              {/*
              // 👉 si quieres reemplazar por tu galería:
              <ImmersiveScrollGallery className="cmp-sticky-replace" />
              */}
            </div>

            {/* Columna derecha */}
            <div className="cmp-col">
              <figure className="cmp-fig">
                <img
                  src="https://images.unsplash.com/photo-1719547907790-f661a88302c2?w=500&auto=format&fit=crop"
                  alt=""
                  className="cmp-img"
                />
              </figure>
              <figure className="cmp-fig">
                <img
                  src="https://images.unsplash.com/photo-1599054799131-4b09c73a63cf?w=500&auto=format&fit=crop"
                  alt=""
                  className="cmp-img"
                />
              </figure>
              <figure className="cmp-fig">
                <img
                  src="https://images.unsplash.com/photo-1719963532023-01b573d1d584?w=500&auto=format&fit=crop"
                  alt=""
                  className="cmp-img"
                />
              </figure>
              <figure className="cmp-fig">
                <img
                  src="https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=500&auto=format&fit=crop"
                  alt=""
                  className="cmp-img"
                />
              </figure>
              <figure className="cmp-fig">
                <img
                  src="https://images.unsplash.com/photo-1719554873571-0fd6bf322bb1?w=500&auto=format&fit=crop"
                  alt=""
                  className="cmp-img"
                />
              </figure>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="cmp-footer">
          <h1 className="cmp-footer-title">ui-layout</h1>
          <div className="cmp-footer-cap" />
        </footer>
      </main>
    </ReactLenis>
  );
});

Component.displayName = 'Component';
export default Component;
