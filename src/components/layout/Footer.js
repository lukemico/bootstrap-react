import { Fragment } from 'react';
import classes from './Footer.module.css';

const Footer = (props) => {
	return (
		<Fragment>
			<footer class="bg-dark text-center text-white fixed-bottom">
				<div class="container p-4">
					<section class="mb-4">
						<a
							class="btn btn-outline-light btn-floating m-1"
							href="#!"
							role="button"
						>
							<i class="fab fa-facebook-f"></i>
						</a>

						<a
							class="btn btn-outline-light btn-floating m-1"
							href="#!"
							role="button"
						>
							<i class="fab fa-twitter"></i>
						</a>

						<a
							class="btn btn-outline-light btn-floating m-1"
							href="#!"
							role="button"
						>
							<i class="fab fa-google"></i>
						</a>

						<a
							class="btn btn-outline-light btn-floating m-1"
							href="#!"
							role="button"
						>
							<i class="fab fa-instagram"></i>
						</a>

						<a
							class="btn btn-outline-light btn-floating m-1"
							href="#!"
							role="button"
						>
							<i class="fab fa-linkedin-in"></i>
						</a>

						<a
							class="btn btn-outline-light btn-floating m-1"
							href="#!"
							role="button"
						>
							<i class="fab fa-github"></i>
						</a>
					</section>

					<section class="mb-4">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Sunt distinctio earum repellat quaerat
							voluptatibus placeat nam, commodi optio pariatur est
							quia magnam eum harum corrupti dicta, aliquam sequi
							voluptate quas.
						</p>
					</section>

					<section class="">
						<div class="row">
							<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 class="text-uppercase">Links</h5>

								<ul class="list-unstyled mb-0">
									<li>
										<a href="#!" class="text-white">
											Link 1
										</a>
									</li>
								</ul>
							</div>
							<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 class="text-uppercase">Links</h5>

								<ul class="list-unstyled mb-0">
									<li>
										<a href="#!" class="text-white">
											Link 1
										</a>
									</li>
								</ul>
							</div>

							<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 class="text-uppercase">Links</h5>

								<ul class="list-unstyled mb-0">
									<li>
										<a href="#!" class="text-white">
											Link 1
										</a>
									</li>
								</ul>
							</div>

							<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 class="text-uppercase">Links</h5>

								<ul class="list-unstyled mb-0">
									<li>
										<a href="#!" class="text-white">
											Link 1
										</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>
				<div class="text-center p-3">
					© 2020 Copyright:
					<a class="text-white" href="https://mdbootstrap.com/">
						MDBootstrap.com
					</a>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
